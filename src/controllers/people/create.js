import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const createdAt = admin.firestore.Timestamp.fromDate(new Date()).toDate();
  const date = createdAt.toDateString();

  const person = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    link: req.body.link,
    description: req.body.description,
    created_at: createdAt,
    date: date
  };

  await db.collection("people").add(person);

  res.json(render(person));
};

const render = person => {
  return {
    status: 1000,
    data: person
  };
};

export default create;
