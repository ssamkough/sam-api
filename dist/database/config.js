"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  db_string: "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_USER_PWD, "@").concat(process.env.DB_CONN)
};
exports["default"] = _default;