import path from "path";
import express from "express";
import controller from "./controllers";
const blocksController = controller.blocks;
const usersController = controller.users;
const messagingController = controller.messaging;

const apiRouter = express.Router();

function wrapAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
}

apiRouter.get("/", (_, res) => {
  res.redirect("https://documenter.getpostman.com/view/4669153/SWLmZ5Ks");
});

// block routes
apiRouter.get("/blocks", wrapAsync(blocksController.list));
apiRouter.get("/blocks/:name", wrapAsync(blocksController.show));

// user routes
apiRouter.post("/login", usersController.login);

// messaging routes
apiRouter.post("/sms", messagingController.response);

export default apiRouter;
