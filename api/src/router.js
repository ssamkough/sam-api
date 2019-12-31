import path from "path";
import express from "express";
import controller from "./controllers";
const blocksController = controller.blocks;
const messagingController = controller.messaging;

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

// messaging routes
apiRouter.post("/sms", messagingController.response);

export default apiRouter;
