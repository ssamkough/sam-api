import db from "../../database/config";

const list = async (req, res, next) => {
  const notebook = await db.collection("notebook");
  let posts = [];

  await notebook.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      posts.push(doc.data());
    });
  });

  res.json(render(posts));
};

const render = posts => {
  return {
    status: 1000,
    data: posts
  };
};

export default list;
