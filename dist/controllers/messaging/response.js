"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var MessagingResponse = require('twilio').twiml.MessagingResponse;

var response =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var message, twiml, keywords;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = req.body.Body.toLowerCase();
            twiml = new MessagingResponse();
            keywords = ['note'];

            if (message.includes('note', 0)) {
              twiml.message('Oi!');
            } else {
              twiml.message('Twilio here!');
            }

            res.writeHead(200, {
              'Content-Type': 'text/xml'
            });
            res.end(twiml.toString());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function response(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = response;
exports["default"] = _default;