import blockList from "./blocks/list";
import blockShow from "./blocks/show";
import userLogin from "./user/login";
import userShow from "./user/show";
import notebookList from "./notebook/list";
import notebookShow from "./notebook/show";
import notebookCreate from "./notebook/create";
import projectList from "./projects/list";
import projectShow from "./projects/show";
import projectCreate from "./projects/create";
import serviceList from "./services/list";
import serviceShow from "./services/show";
import serviceCreate from "./services/create";
import messagingResponse from "./messaging/response";

export default {
  blocks: {
    list: blockList,
    show: blockShow
  },
  users: {
    login: userLogin,
    show: userShow
  },
  notebook: {
    list: notebookList,
    show: notebookShow,
    create: notebookCreate
  },
  projects: {
    list: projectList,
    show: projectShow,
    create: projectCreate
  },
  services: {
    list: serviceList,
    show: serviceShow,
    create: serviceCreate
  },
  messaging: {
    response: messagingResponse
  }
};
