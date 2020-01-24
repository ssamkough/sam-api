import blockList from "./blocks/list";
import blockCreate from "./blocks/create";
import blockDestroy from "./blocks/destroy";
import blockShow from "./blocks/show";
import blockUpdate from "./blocks/update";
import userLogin from "./user/login";
import messagingResponse from "./messaging/response";

export default {
  blocks: {
    list: blockList,
    create: blockCreate,
    destroy: blockDestroy,
    show: blockShow,
    update: blockUpdate
  },
  users: {
    login: userLogin
  },
  messaging: {
    response: messagingResponse
  }
};
