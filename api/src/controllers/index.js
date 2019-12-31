module.exports = {
  blocks: {
    list: require("./blocks/list"),
    create: require("./blocks/create"),
    destroy: require("./blocks/destroy"),
    show: require("./blocks/show")
  },
  messaging: {
    response: require("./messaging/response")
  }
};
