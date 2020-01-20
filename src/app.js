import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import router from "./router";
import errorHandler from "./middleware/errorHandler";
import messageHandler from "./middleware/messageHandler";

import db from "./database/config";
mongoose.connect(
  db.db_string,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB!");
  }
);

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

// app.use(messageHandler);
app.use(errorHandler);

export default app;
