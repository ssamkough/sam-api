import blockList from "./blocks/list";
import blockShow from "./blocks/show";
import userLogin from "./user/login";
import notebookList from "./notebook/list";
import notebookShow from "./notebook/show";
import notebookCreate from "./notebook/create";
import projectList from "./projects/list";
import projectShow from "./projects/show";
import projectCreate from "./projects/create";
import serviceList from "./service/list";
import serviceShow from "./service/show";
import serviceCreate from "./service/create";
import messagingResponse from "./messaging/response";

export default {
  blocks: {
    list: blockList,
    show: blockShow
  },
  users: {
    login: userLogin
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
