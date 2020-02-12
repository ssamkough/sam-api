import path from "path";
import express from "express";

import verify from "./middleware/auth/verifyToken";
import controller from "./controllers";

const blocksController = controller.blocks;
const usersController = controller.users;
const notebookController = controller.notebook;
const projectsController = controller.projects;
const servicesController = controller.services;
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
apiRouter.get("/blocks", verify, wrapAsync(blocksController.list));
apiRouter.get("/blocks/:name", verify, wrapAsync(blocksController.show));

// user routes
apiRouter.post("/login", usersController.login);

// notebook routes
apiRouter.get("/posts", verify, notebookController.list);
apiRouter.get("/posts/:path", verify, notebookController.show);
apiRouter.post("/posts", verify, notebookController.create);

// projects routes
apiRouter.get("/projects", verify, projectsController.list);
apiRouter.get("/projects/:path", verify, projectsController.show);
apiRouter.post("/projects", verify, projectsController.create);

// services routes
apiRouter.get("/services", verify, servicesController.list);
apiRouter.get("/services/:path", verify, servicesController.show);
apiRouter.post("/services", verify, servicesController.create);

// messaging routes
apiRouter.post("/sms", verify, messagingController.response);

export default apiRouter;
