import Block from "../../models/Block";

const list = async (req, res, next) => {
  const blocks = await Block.find();
  res.json(render(blocks));
};

const render = blocks => {
  return {
    status: 1000,
    data: blocks
  };
};

export default list;
