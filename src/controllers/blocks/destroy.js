import { Block } from "../../models";

const destroy = async (req, res, next) => {
  const block = await Block.findByPk(req.params.id);
  await block.destroy();
  res.status(204).send(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default destroy;
