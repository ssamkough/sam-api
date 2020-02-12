import db from "./../../database/config";

const show = async (req, res, next) => {
  const document = db.collection("blocks").doc(req.params.name);
  let block = await document.get();
  let response = block.data();

  res.json(render(response));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default show;
