"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = _interopRequireDefault(require("./blocks/list"));

var _create = _interopRequireDefault(require("./blocks/create"));

var _destroy = _interopRequireDefault(require("./blocks/destroy"));

var _show = _interopRequireDefault(require("./blocks/show"));

var _update = _interopRequireDefault(require("./blocks/update"));

var _login = _interopRequireDefault(require("./user/login"));

var _response = _interopRequireDefault(require("./messaging/response"));

var _default = {
  blocks: {
    list: _list["default"],
    create: _create["default"],
    destroy: _destroy["default"],
    show: _show["default"],
    update: _update["default"]
  },
  users: {
    login: _login["default"]
  },
  messaging: {
    response: _response["default"]
  }
};
exports["default"] = _default;