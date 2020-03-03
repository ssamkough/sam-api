import admin from "firebase-admin";
import db from "../../database/config";

const destroy = async (req, res, next) => {
  await db
    .collection("people")
    .doc(req.params.id)
    .delete();

  res.json(render(req.params.id));
};

const render = personId => {
  return {
    status: 1000,
    data: personId
  };
};

export default destroy;
