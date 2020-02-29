import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "./../../database/config";

const login = async (req, res, next) => {
  const document = await db.collection("users").doc(req.body.uuid);
  const userRef = await document.get();
  const user = userRef.data();
  if (!user) {
    return res.status(400).send("Invalid uuid!");
  }

  let validPass;
  try {
    validPass = await bcrypt.compare(req.body.password, user.password);
  } catch (err) {
    console.log(err);
  }

  if (!validPass) {
    return res.status(400).send("Invalid Password!");
  }

  const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET);
  res.header("sam-api-token", token);
  user["jwt_token"] = token;

  res.json(render(user));
};

const render = user => {
  return {
    status: 1000,
    data: user
  };
};

export default login;
