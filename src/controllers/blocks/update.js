import Block from "../../models/Block";

const update = async (req, res, next) => {
  const block = await Block.updateOne(
    { _id: req.params.id },
    { $set: { name: req.body.name } }
  );
  res.json(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default update;
