import blockList from "./blocks/list";
import blockCreate from "./blocks/create";
import blockDestroy from "./blocks/destroy";
import blockShow from "./blocks/show";
import messagingResponse from "./messaging/response";

export default {
  blocks: {
    list: blockList,
    create: blockCreate,
    destroy: blockDestroy,
    show: blockShow
  },
  messaging: {
    response: messagingResponse
  }
};
