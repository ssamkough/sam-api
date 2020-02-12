import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "./../../database/config";

const login = async (req, res, next) => {
  const document = db.collection("users").doc(req.body.email);
  const user = await document.get();
  if (!user) {
    return res.status(400).send("Invalid Email!");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Invalid Password!");
  }

  const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET);
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
