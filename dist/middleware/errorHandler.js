"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _samError = _interopRequireDefault(require("../errors/samError"));

var _default = function _default(error, req, res, next) {
  var errorCode = 2000;
  var httpStatusCode = 500;
  var errorMessage = error.message;

  if (error instanceof _samError["default"]) {
    errorCode = error.code;
    httpStatusCode = error.httpStatusCode;
  }

  var body = {
    error: {
      code: errorCode,
      message: error.message
    }
  };

  if (process.env.NODE_ENV !== "production") {
    body.error.stack_trace = error.stack.split("\n");
  }

  res.status(httpStatusCode).json(body);
  console.error(error.stack);
};

exports["default"] = _default;