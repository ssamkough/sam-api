const path = require("path");
const express = require("express");
const controller = require("./controllers");
const blocksController = controller.blocks;

const apiRouter = express.Router();

function wrapAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
}

apiRouter.get("/", (_, res) =>
  res.sendFile(path.resolve("src/public/index.html"))
);

// block routes
apiRouter.get("/blocks", wrapAsync(blocksController.list));
apiRouter.post("/blocks", wrapAsync(blocksController.create));
apiRouter.delete("/blocks/:id", wrapAsync(blocksController.destroy));
apiRouter.get("/blocks/:id", wrapAsync(blocksController.show));

module.exports = apiRouter;
