require("dotenv").config();
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./router";
import errorHandler from "./middleware/errorHandler";
import messageHandler from "./middleware/messageHandler";

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", router);

app.get("/", (req, res) => {
  var fullUrl =
    req.protocol + "://" + req.get("host") + req.originalUrl + "api";

  res.status(200).send('<a href="' + fullUrl + '">' + fullUrl + "</a>");
});

// app.use(messageHandler);
app.use(errorHandler);

const onAppStarted = () => {
  console.log(`App running on ${port}.`);
};

const port = parseInt(process.env.PORT) || 8000;
app.listen(port, onAppStarted);
