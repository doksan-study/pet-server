const { Router } = require("express");
const router = Router();

const user = require("./user");
const pet = require("./pet");

router.use("/user", user); // 유저 라우터
router.use("/pet", pet); // pet 라우터

module.exports = router;