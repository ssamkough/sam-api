import jwt from "jsonwebtoken";

import User from "../../models/User";

const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token);

  res.json(render(user));
};

const render = user => {
  return {
    status: 1000,
    data: user
  };
};

export default login;
