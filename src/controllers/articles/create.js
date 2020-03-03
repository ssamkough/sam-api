import admin from "firebase-admin";
import db from "../../database/config";

const create = async (req, res, next) => {
  const createdAt = admin.firestore.Timestamp.fromDate(new Date()).toDate();
  const date = createdAt.toDateString();

  const article = {
    link: req.body.link,
    title: req.body.title,
    author_first_name: req.body.author_first_name,
    author_last_name: req.body.author_last_name,
    website: req.body.website,
    publisher: req.body.publisher,
    publication_date: req.body.publication_date,
    description: req.body.description,
    tags: req.body.tags,
    created_at: createdAt,
    date: date
  };

  await db.collection("articles").add(article);

  res.json(render(article));
};

const render = article => {
  return {
    status: 1000,
    data: article
  };
};

export default create;
