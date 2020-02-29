import admin from "firebase-admin";
import db from "../../database/config";

const destroy = async (req, res, next) => {
  const projectPath = req.params.path;

  await db
    .collection("projects")
    .doc(req.params.path)
    .delete();

  res.json(render(projectPath));
};

const render = projectPath => {
  return {
    status: 1000,
    data: projectPath
  };
};

export default destroy;
