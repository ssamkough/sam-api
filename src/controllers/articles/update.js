import admin from "firebase-admin";
import db from "../../database/config";

const update = async (req, res, next) => {
  const articleRef = await db.collection("articles").doc(req.params.id);
  let updatedArticleObj = req.body;

  if (req.body.tags) {
    try {
      let currTags = await articleRef.get();

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

  updatedArticleObj.edited_at = admin.firestore.Timestamp.fromDate(
    new Date()
  ).toDate();

  await articleRef.update(updatedArticleObj);

  res.json(render(updatedArticleObj));
};

const render = article => {
  return {
    status: 1000,
    data: article
  };
};

export default update;
