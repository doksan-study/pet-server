const { Router } = require("express");
const multer = require('multer');

const router = Router();

const { petRegister } = require("../controllers");
const { isLoggedIn } = require('../middlewares/auth'); // 로그인 한 유저만 접근 가능
const tryCatch = require("../middlewares/tryCatch");

const upload = multer({ dest: "files/" });

router.post("/", isLoggedIn, upload.array("image"), tryCatch(petRegister));

module.exports = router;