import path from "path";
import express from "express";

import controller from "./controllers";
import verify from "./middleware/auth/verifyToken";

const blocksController = controller.blocks;
const usersController = controller.users;
const notebookController = controller.notebook;
const projectsController = controller.projects;
const servicesController = controller.services;
const musicController = controller.music;
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

/* public routes */
// blocks
apiRouter.get("/blocks", wrapAsync(blocksController.list));
apiRouter.get("/blocks/:name", wrapAsync(blocksController.show));

// user
apiRouter.post("/users/login", usersController.login);
apiRouter.get("/users/show", usersController.show);

// notebook
apiRouter.get("/posts", notebookController.list);
apiRouter.get("/posts/:path", notebookController.show);

// projects
apiRouter.get("/projects", projectsController.list);
apiRouter.get("/projects/:path", projectsController.show);

// services
apiRouter.get("/services", servicesController.list);
apiRouter.get("/services/:path", servicesController.show);

// music
apiRouter.get("/spotify_token", musicController.spotify_token);
apiRouter.get(
  "/spotify_token_callback",

  musicController.spotify_token_callback
);
apiRouter.get("/spotify/playlists", musicController.spotify_playlists);
apiRouter.get(
  "/spotify/recent_tracks",

  musicController.spotify_recent_tracks
);

/* private routes */
// posts
apiRouter.post("/posts", verify, notebookController.create);
apiRouter.put("/posts/:path", verify, notebookController.update);
apiRouter.delete("/posts/:path", verify, notebookController.destroy);

// projects
apiRouter.post("/projects", verify, projectsController.create);
apiRouter.put("/projects/:path", verify, projectsController.update);
apiRouter.delete("/projects/:path", verify, projectsController.destroy);

// services
apiRouter.post("/services", verify, servicesController.create);
apiRouter.put("/services/:path", verify, servicesController.update);
apiRouter.delete("/services/:path", verify, servicesController.destroy);

// messaging
apiRouter.post("/sms", verify, messagingController.response);

export default apiRouter;
