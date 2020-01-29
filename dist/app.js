"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _router = _interopRequireDefault(require("./router"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _messageHandler = _interopRequireDefault(require("./middleware/messageHandler"));

var _config = _interopRequireDefault(require("./database/config"));

require("dotenv").config();

_mongoose["default"].connect(_config["default"].db_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  console.log("Connected to MongoDB!");
});

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use("/api", _router["default"]);
app.get("/", function (req, res) {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl + "api";
  res.status(200).send('<a href="' + fullUrl + '">' + fullUrl + "</a>");
}); // app.use(messageHandler);

app.use(_errorHandler["default"]);

var onAppStarted = function onAppStarted() {
  console.log("App running on ".concat(port, "."));
};

var port = parseInt(process.env.PORT) || 8000;
app.listen(port, onAppStarted);