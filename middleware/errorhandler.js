const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN ",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER:
      res.json({
        title: "Server Error ",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No Error,All good");
  }
};

module.exports = errorHandler;
