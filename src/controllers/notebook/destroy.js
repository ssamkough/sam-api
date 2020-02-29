import admin from "firebase-admin";
import db from "../../database/config";

const destroy = async (req, res, next) => {
  const postPath = req.params.path;

  await db
    .collection("notebook")
    .doc(req.params.path)
    .delete();

  res.json(render(postPath));
};

const render = postPath => {
  return {
    status: 1000,
    data: postPath
  };
};

export default destroy;
