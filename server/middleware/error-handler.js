const { StatusCodes } = require("http-status-codes");

const errorHandlerMidlleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Somthing went worng, try again later",
  };

  return res.status(customError.statusCode).json({ msg: customError.message });
};

module.exports = errorHandlerMidlleware;
