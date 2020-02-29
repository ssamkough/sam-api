import admin from "firebase-admin";
import db from "../../database/config";

const update = async (req, res, next) => {
  const serviceRef = await db.collection("services").doc(req.params.path);
  let updatedserviceObj = req.body;

  if (req.body.tags) {
    try {
      let currTags = await serviceRef.get();

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

  updatedserviceObj.edited_at = admin.firestore.Timestamp.fromDate(
    new Date()
  ).toDate();

  await serviceRef.update(updatedserviceObj);

  res.json(render(updatedserviceObj));
};

const render = service => {
  return {
    status: 1000,
    data: service
  };
};

export default update;
