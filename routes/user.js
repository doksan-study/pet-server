const { Router } = require("express");
const { userSignUp, userSignIn } = require("../controllers");
const tryCatch = require("../middlewares/tryCatch")

const router = Router();

router.post("/signUp", tryCatch(userSignUp));
router.post("/signIn", tryCatch(userSignIn));

module.exports = router;