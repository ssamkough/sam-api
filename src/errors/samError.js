class SamError extends Error {
  constructor(code = 2000, { httpStatusCode, message } = {}) {
    let defaultMessage;
    let defaultHttpStatusCode;

    switch (code) {
      case 2001:
        defaultMessage = "Object was not found.";
        defaultHttpStatusCode = 404;
        break;
      case 2000:
      default:
        defaultMessage = "Something unexpected happened.";
        defaultHttpStatusCode = 500;
        break;
    }

    super(message || defaultMessage);
    this.code = code;
    this.httpStatusCode = httpStatusCode || defaultHttpStatusCode;
  }
}

SamError.Types = require("./errorTypes");
export default SamError;
