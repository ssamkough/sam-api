const Block = require("../../models").Block;
const SamError = require("../../errors/samError");

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

module.exports = list;
