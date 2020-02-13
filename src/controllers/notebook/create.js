import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const postPath = req.body.title.replace(/\s+/g, "-").toLowerCase();

  let postRef = db.collection("notebook").doc(postPath);
  let getDoc = await postRef.get();
  if (getDoc.exists) {
    return res.status(400).send("Title Exists!");
  }

  const timestamp = admin.firestore.Timestamp.fromDate(new Date()).toDate();
  const date = timestamp.toDateString();

  const post = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    path: postPath,
    timestamp: timestamp,
    date: date
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
