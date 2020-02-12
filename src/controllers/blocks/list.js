import db from "./../../database/config";

const list = async (req, res, next) => {
  let blocks = db.collection("blocks");
  let response = [];

  await blocks.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      response.push(doc.data());
    });
  });

  res.json(render(response));
};

const render = blocks => {
  return {
    status: 1000,
    data: blocks
  };
};

export default list;
