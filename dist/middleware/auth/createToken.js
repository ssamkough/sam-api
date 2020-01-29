"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _uniqid = _interopRequireDefault(require("uniqid"));

var createToken =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _jsonwebtoken["default"].sign({
              id: (0, _uniqid["default"])()
            }, process.env.TOKEN_SECRET);
            res.header("auth-token", token);
            res.json(render(token));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var render = function render(token) {
  return {
    status: 1000,
    data: token
  };
};

var _default = createToken;
exports["default"] = _default;