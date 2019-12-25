const Block = require("../../models").Block;
const SamError = require("../../errors/samError");

const show = async (req, res, next) => {
  const block = await Block.findByPk(req.params.id, { rejectOnEmpty: true });
  res.json(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

module.exports = show;
