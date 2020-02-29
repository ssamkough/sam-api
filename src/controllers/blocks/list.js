import db from "./../../database/config";

const list = async (req, res, next) => {
  const blocksRef = await db.collection("blocks");
  let blocks = [];

  await blocksRef.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      blocks.push(doc.data());
    });
  });

  res.json(render(blocks));
};

const render = blocks => {
  return {
    status: 1000,
    data: blocks
  };
};

export default list;
