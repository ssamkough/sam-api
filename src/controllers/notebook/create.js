import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const postPath = req.body.title.replace(/\s+/g, "-").toLowerCase();

  // see if document exists
  let postRef = db.collection("notebook").doc(postPath);
  let getDoc = await postRef.get();
  if (getDoc) {
    return res.status(400).send("Title Exists!");
  }

  const post = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    path: postPath,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  };

  await db
    .collection("notebook")
    .doc(postPath)
    .set(post);

  res.json(render(post));
};

const render = post => {
  return {
    status: 1000,
    data: post
  };
};

export default create;
