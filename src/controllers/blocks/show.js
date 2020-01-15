import Block from "../../models/Block";

const show = async (req, res, next) => {
  const block = await Block.findById(req.params.id);
  res.json(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default show;
