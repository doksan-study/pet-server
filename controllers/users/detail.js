const { user } = require("../../models");

const {
  isAuthorized
} = require("../../middlewares/jwt");

module.exports = (async (req, res) => {
  const tokenVerify = isAuthorized(req);
})