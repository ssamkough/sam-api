"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var SamError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2["default"])(SamError, _Error);

  function SamError() {
    var _this;

    var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        httpStatusCode = _ref.httpStatusCode,
        message = _ref.message;

    (0, _classCallCheck2["default"])(this, SamError);
    var defaultMessage;
    var defaultHttpStatusCode;

    switch (code) {
      case 2001:
        defaultMessage = "Object was not found.";
        defaultHttpStatusCode = 404;
        break;

      case 2000:
      default:
        defaultMessage = "Something unexpected happened.";
        defaultHttpStatusCode = 500;
        break;
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SamError).call(this, message || defaultMessage));
    _this.code = code;
    _this.httpStatusCode = httpStatusCode || defaultHttpStatusCode;
    return _this;
  }

  return SamError;
}((0, _wrapNativeSuper2["default"])(Error));

SamError.Types = require("./errorTypes");
var _default = SamError;
exports["default"] = _default;