"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var UserSchema = (0, _mongoose.Schema)({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  about_me: {
    type: String,
    required: true
  },
  profile_image_url: {
    type: String,
    required: true
  },
  job_title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  date: {
    type: Date,
    "default": Date.now,
    required: true
  }
});

var _default = (0, _mongoose.model)("User", UserSchema);

exports["default"] = _default;