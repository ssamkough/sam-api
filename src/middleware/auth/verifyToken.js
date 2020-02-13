import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.header("sam-api-token");
  if (!token) {
    console.error("Headers: " + JSON.stringify(req.headers));
    console.error("Token: " + token);
    return res.status(401).send("Access Denied!");
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token!");
  }
};
