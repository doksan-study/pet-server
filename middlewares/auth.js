const {
  invalidToken,
  notLoggedIn
} = require("../middlewares/errorcode");

module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.headers.authorization) {
      next()
    } else {
      return next(invalidToken);
    }
  },

  isNotLoggedIn: (req, res, next) => {
    if (!req.headers.authorization) {
      next()
    } else {
      return next(notLoggedIn);
    }
  }
}