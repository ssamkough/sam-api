import admin from "firebase-admin";
import db from "../../database/config";

const destroy = async (req, res, next) => {
  await db
    .collection("articles")
    .doc(req.params.id)
    .delete();

  res.json(render(req.params.id));
};

const render = articleId => {
  return {
    status: 1000,
    data: articleId
  };
};

export default destroy;
