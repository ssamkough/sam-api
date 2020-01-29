"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Block = _interopRequireDefault(require("../../models/Block"));

var show =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var block;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Block["default"].findById(req.params.id);

          case 2:
            block = _context.sent;
            res.json(render(block));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function show(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var render = function render(block) {
  return {
    status: 1000,
    data: block
  };
};

var _default = show;
exports["default"] = _default;