import { Block } from "../../models";

const list = async (req, res, next) => {
  const blocks = await Block.findAll();
  res.json(render(blocks));
};

const render = blocks => {
  return {
    status: 1000,
    data: blocks
  };
};

export default list;
