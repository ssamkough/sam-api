"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var BlockSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now,
    required: true
  }
});

var _default = (0, _mongoose.model)("Block", BlockSchema);

exports["default"] = _default;