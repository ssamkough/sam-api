import admin from "firebase-admin";
import db from "../../database/config";

const destroy = async (req, res, next) => {
  const servicePath = req.params.path;

  await db
    .collection("services")
    .doc(req.params.path)
    .delete();

  res.json(render(servicePath));
};

const render = servicePath => {
  return {
    status: 1000,
    data: servicePath
  };
};

export default destroy;
