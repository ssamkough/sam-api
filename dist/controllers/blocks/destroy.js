"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Block = _interopRequireDefault(require("../../models/Block"));

var destroy =
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
            return _Block["default"].remove({
              _id: req.params.id
            });

          case 2:
            block = _context.sent;
            res.status(204).send(render(block));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function destroy(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var render = function render(block) {
  return {
    status: 1000,
    data: block
  };
};

var _default = destroy;
exports["default"] = _default;