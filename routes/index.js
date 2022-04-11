const { Router } = require("express");
const router = Router();

const user = require("./user");
const pet = require("./pet");

router.use("/user", user);
router.use("/pet", pet);

module.exports = router;