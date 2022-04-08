const { User } = require("../../models");
const crypto = require("crypto-js");

const {
  generateAccessToken,
  generateRefreshToken
} = require("../../middlewares/jwt");

const {
  notMatchEmail,
  notMatchPassword
} = require("../../middlewares/error");

module.exports = (async (req, res) => {
  const { userEmail, userPassword } = req.body;

  const userInfo = await User.findOne({
    where: { email: userEmail },
    raw: true
  });

  if (!userInfo) {
    return res.status(notMatchEmail.status).send({
      code: notMatchEmail.code,
      message: notMatchEmail.message
    })
  } else {
    const hash = crypto.SHA256(userPassword, process.env.SALT).toString();

    if (hash !== userInfo.password) {
      return res.status(400).send({
        message: "비밀번호를 확인해주세요."
      })
    } else {
      const accessToken = generateAccessToken(userInfo);
      const refreshToken = generateRefreshToken(userInfo);

      return res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          sameSite: "none",
          secure: true,
          httpOnly: true,
        })
        .send({
          data: {
            accessToken,
            refreshToken
          },
          message: "로그인이 성공하였습니다.",
        });
    }
  }
})