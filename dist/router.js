"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _controllers = _interopRequireDefault(require("./controllers"));

var blocksController = _controllers["default"].blocks;
var usersController = _controllers["default"].users;
var messagingController = _controllers["default"].messaging;

var apiRouter = _express["default"].Router();

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next)["catch"](next);
  };
}

apiRouter.get("/", function (_, res) {
  res.redirect("https://documenter.getpostman.com/view/4669153/SWLmZ5Ks");
}); // block routes

apiRouter.get("/blocks", wrapAsync(blocksController.list));
apiRouter.post("/blocks", wrapAsync(blocksController.create));
apiRouter["delete"]("/blocks/:id", wrapAsync(blocksController.destroy));
apiRouter.get("/blocks/:id", wrapAsync(blocksController.show));
apiRouter.put("/blocks/:id", wrapAsync(blocksController.update)); // user routes

apiRouter.post("/login", usersController.login); // messaging routes

apiRouter.post("/sms", messagingController.response);
var _default = apiRouter;
exports["default"] = _default;