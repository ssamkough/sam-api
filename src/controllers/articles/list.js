import db from "../../database/config";

const list = async (req, res, next) => {
  const articlesRef = await db.collection("articles");
  let articles = [];

  await articlesRef.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      articles.push(doc.data());
    });
  });

  res.json(render(articles));
};

const render = peple => {
  return {
    status: 1000,
    data: articles
  };
};

export default list;
