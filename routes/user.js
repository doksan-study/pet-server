const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

const { userSignUp } = controllers

router.post("/", userSignUp);

module.exports = router;