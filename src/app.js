import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

import router from "./router";
import errorHandler from "./middleware/errorHandler";
import messageHandler from "./middleware/messageHandler";

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);

app.get("/", (req, res) => {
  var fullUrl =
    req.protocol + "://" + req.get("host") + req.originalUrl + "api";

  res.status(200).send('<a href="' + fullUrl + '">' + fullUrl + "</a>");
});

app.use(messageHandler);
app.use(errorHandler);

export default app;
