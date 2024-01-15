const { StatusCodes } = require("http-status-codes");

const notFound = (_req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ msg: "Route Not Found!" });
};

module.exports = notFound;
