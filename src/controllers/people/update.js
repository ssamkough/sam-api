import admin from "firebase-admin";
import db from "../../database/config";

const update = async (req, res, next) => {
  const personRef = await db.collection("people").doc(req.params.id);
  let updatedPersonObj = req.body;

  updatedPersonObj.edited_at = admin.firestore.Timestamp.fromDate(
    new Date()
  ).toDate();

  await personRef.update(updatedPersonObj);

  res.json(render(updatedPersonObj));
};

const render = person => {
  return {
    status: 1000,
    data: person
  };
};

export default update;
