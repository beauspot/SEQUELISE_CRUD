const { CustomAPIError } = require("../errors/custom-errors");
exports.customErrHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.mesage });
  }
  return res
    .status(500)
    .json({
      msg: `You have a ${err.name}, and the message is ${err.message}`,
    });
};
