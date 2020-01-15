import jwt from "jsonwebtoken";
import uniqid from "uniqid";

const createToken = async (req, res, next) => {
  const token = jwt.sign({ id: uniqid() }, process.env.TOKEN_SECRET);
  res.header("auth-token", token);
  res.json(render(token));
};

const render = token => {
  return {
    status: 1000,
    data: token
  };
};

export default createToken;
