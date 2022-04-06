const { Router } = require("express");
const multer = require('multer');

const router = Router();

const { postWrite } = require("../controllers");
const { isLoggedIn } = require('../middlewares/auth');
const tryCatch = require("../middlewares/tryCatch");

const upload = multer({ dest: "files/" });

router.post("/write", isLoggedIn, upload.array("postImage"), tryCatch(postWrite));

module.exports = router;