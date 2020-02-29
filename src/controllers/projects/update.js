import admin from "firebase-admin";
import db from "../../database/config";

const update = async (req, res, next) => {
  const projectRef = await db.collection("projects").doc(req.params.path);
  let updatedprojectObj = req.body;

  if (req.body.tags) {
    try {
      let currTags = await projectRef.get();

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

  updatedprojectObj.edited_at = admin.firestore.Timestamp.fromDate(
    new Date()
  ).toDate();

  await projectRef.update(updatedprojectObj);

  res.json(render(updatedprojectObj));
};

const render = project => {
  return {
    status: 1000,
    data: project
  };
};

export default update;
