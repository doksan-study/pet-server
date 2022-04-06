const { Router } = require("express");
const { userSignUp, userSignIn } = require("../controllers");
const tryCatch = require("../middlewares/tryCatch")

const router = Router();

router.post("/signup", tryCatch(userSignUp));
router.post("/signin", tryCatch(userSignIn));

module.exports = router;