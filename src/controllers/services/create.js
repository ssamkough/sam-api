import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const servicePath = req.body.title.replace(/\s+/g, "-").toLowerCase();

  // see if document exists
  let serviceRef = db.collection("services").doc(servicePath);
  let getDoc = await serviceRef.get();
  if (getDoc) {
    return res.status(400).send("Title Exists!");
  }

  const service = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    path: servicePath,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
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
