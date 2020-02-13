import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const projectPath = req.body.title.replace(/\s+/g, "-").toLowerCase();

  let projectRef = db.collection("projects").doc(projectPath);
  let getDoc = await projectRef.get();
  if (getDoc.exists) {
    return res.status(400).send("Title Exists!");
  }

  const timestamp = admin.firestore.Timestamp.fromDate(new Date()).toDate();
  const date = timestamp.toDateString();

  const project = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    path: projectPath,
    timestamp: timestamp,
    date: date
  };

  await db
    .collection("projects")
    .doc(projectPath)
    .set(project);

  res.json(render(project));
};

const render = project => {
  return {
    status: 1000,
    data: project
  };
};

export default create;
