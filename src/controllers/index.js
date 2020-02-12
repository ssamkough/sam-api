import blockList from "./blocks/list";
import blockShow from "./blocks/show";
import userLogin from "./user/login";
import messagingResponse from "./messaging/response";

export default {
  blocks: {
    list: blockList,
    show: blockShow
  },
  users: {
    login: userLogin
  },
  messaging: {
    response: messagingResponse
  }
};
