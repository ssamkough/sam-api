import Block from "../../models/Block";

const create = async (req, res, next) => {
  const block = await new Block({
    name: req.body.name
  });

  await block.save();

  res.json(render(block));
};

const render = block => {
  return {
    status: 1000,
    data: block
  };
};

export default create;
