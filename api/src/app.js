const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const router = require("./router");
const errorHandler = require("./middleware/errorHandler");
const messageHandler = require("./middleware/messageHandler");

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

module.exports = app;
