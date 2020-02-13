import path from "path";
import express from "express";
import cors from "cors";

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
apiRouter.get("/blocks", cors(), wrapAsync(blocksController.list));
apiRouter.get("/blocks/:name", cors(), wrapAsync(blocksController.show));

// user routes
apiRouter.post("/users/login", usersController.login);
apiRouter.get("/users/show", cors(), usersController.show);

// notebook routes
apiRouter.get("/posts", cors(), notebookController.list);
apiRouter.get("/posts/:path", cors(), notebookController.show);
apiRouter.post("/posts", verify, notebookController.create);

// projects routes
apiRouter.get("/projects", cors(), projectsController.list);
apiRouter.get("/projects/:path", cors(), projectsController.show);
apiRouter.post("/projects", verify, projectsController.create);

// services routes
apiRouter.get("/services", cors(), servicesController.list);
apiRouter.get("/services/:path", cors(), servicesController.show);
apiRouter.post("/services", verify, servicesController.create);

// messaging routes
apiRouter.post("/sms", verify, messagingController.response);

export default apiRouter;
