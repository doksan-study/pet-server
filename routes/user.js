const { Router } = require("express");
const multer = require('multer');

const router = Router();

const { userSignUp, userSignIn, userDetail } = require("../controllers");
const { isNotLoggedIn, isLoggedIn } = require('../middlewares/auth'); // 로그인 한 유저는 접근 불가
const tryCatch = require("../middlewares/tryCatch"); // tryCatch 미들웨어

const upload = multer({ dest: "files/" }); // 이미지 저장 할 폴더

router.post("/", isNotLoggedIn, upload.single("userProfileImg"), tryCatch(userSignUp)); // 유저 회원가입
router.post("/login", isNotLoggedIn, tryCatch(userSignIn)); // 유저 로그인
router.get("/", isLoggedIn, tryCatch(userDetail)); // 유저 상세정보

module.exports = router;