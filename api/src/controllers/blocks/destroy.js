const Block = require("../../models").Block;
const SamError = require("../../errors/samError");

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

module.exports = destroy;
