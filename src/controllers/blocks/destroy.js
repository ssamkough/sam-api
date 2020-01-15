import Block from "../../models/Block";

const destroy = async (req, res, next) => {
  const block = await Block.remove({ _id: req.params.id });
  res.status(204).send(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default destroy;
