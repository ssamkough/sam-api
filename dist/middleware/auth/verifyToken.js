"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _default = verifyToken = function verifyToken(req, res, next) {
  var token = req.header("auth-token");

  if (!token) {
    return res.status(401).send("Access Denied!");
  }

  try {
    var verified = _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET);

    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid Token!");
  }
};

exports["default"] = _default;