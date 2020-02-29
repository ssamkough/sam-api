import admin from "firebase-admin";
import db from "../../database/config";

const update = async (req, res, next) => {
  const postRef = await db.collection("notebook").doc(req.params.path);
  let updatedPostObj = req.body;

  if (req.body.tags) {
    try {
      let currTags = await postRef.get();

      let arr = [...req.body.tags, ...currTags.data().tags];

      let tagSet = new Set();
      arr.forEach(tag => {
        if (!tagSet.has(tag)) {
          tagSet.add(tag);
        }
      });

      req.body.tags = Array.from(tagSet);
    } catch (error) {
      console.error("Error updating document:\n", error);
    }
  }

  updatedPostObj.edited_at = admin.firestore.Timestamp.fromDate(
    new Date()
  ).toDate();

  await postRef.update(updatedPostObj);

  res.json(render(updatedPostObj));
};

const render = post => {
  return {
    status: 1000,
    data: post
  };
};

export default update;
