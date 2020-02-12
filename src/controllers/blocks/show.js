import db from "./../../database/config";

const show = async (req, res, next) => {
  const document = db.collection("blocks").doc(req.params.name);
  const blockRef = await document.get();
  const block = blockRef.data();

  res.json(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default show;
