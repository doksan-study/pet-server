const { Router } = require("express");
const multer = require('multer');

const router = Router();

const { userSignUp, userSignIn } = require("../controllers");
const { isNotLoggedIn } = require('../middlewares/auth');
const tryCatch = require("../middlewares/tryCatch");

const upload = multer({ dest: "files/" });

router.post("/signup", isNotLoggedIn, upload.single("userProfileImg"), tryCatch(userSignUp));
router.post("/signin", isNotLoggedIn, tryCatch(userSignIn));

module.exports = router;