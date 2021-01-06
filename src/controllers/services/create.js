import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  let servicePath = req.body.title.replace(/\s+/g, "-").toLowerCase();
  servicePath = servicePath.replace("/", "_");

  let serviceRef = await db.collection("services").doc(servicePath);
  let getDoc = await serviceRef.get();
  if (getDoc.exists) {
    return res.status(400).send("Title Exists!");
  }

  const createdAt = admin.firestore.Timestamp.fromDate(new Date()).toDate();
  const date = createdAt.toDateString();

  const service = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    path: servicePath,
    created_at: createdAt,
    date: date,
  };

  await db
    .collection("services")
    .doc(servicePath)
    .set(service);

  res.json(render(service));
};

const render = (service) => {
  return {
    status: 1000,
    data: service,
  };
};

export default create;
