import { Block } from "../../models";

const create = async (req, res, next) => {
  const block = await Block.create({
    name: req.body.name
  });
  res.json(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default create;
