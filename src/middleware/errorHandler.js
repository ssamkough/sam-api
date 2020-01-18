import SamError from "../errors/samError";

export default (error, req, res, next) => {
  let errorCode = 2000;
  let httpStatusCode = 500;
  let errorMessage = error.message;

  if (error instanceof SamError) {
    errorCode = error.code;
    httpStatusCode = error.httpStatusCode;
  }

  const body = {
    error: {
      code: errorCode,
      message: error.message
    }
  };

  if (process.env.NODE_ENV !== "production") {
    body.error.stack_trace = error.stack.split("\n");
  }

  res.status(httpStatusCode).json(body);
  console.error(error.stack);
};
