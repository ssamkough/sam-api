import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const servicePath = req.body.title.replace(/\s+/g, "-").toLowerCase();

  let serviceRef = db.collection("services").doc(servicePath);
  let getDoc = await serviceRef.get();
  if (getDoc.exists) {
    return res.status(400).send("Title Exists!");
  }

  const timestamp = admin.firestore.Timestamp.fromDate(new Date()).toDate();
  const date = timestamp.toDateString();

  const service = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    path: servicePath,
    timestamp: timestamp,
    date: date
  };

  await db
    .collection("services")
    .doc(servicePath)
    .set(service);

  res.json(render(service));
};

const render = service => {
  return {
    status: 1000,
    data: service
  };
};

export default create;
