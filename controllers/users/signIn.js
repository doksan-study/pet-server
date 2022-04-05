const { User } = require("../../models");
const crypto = require("crypto-js");

const {
  generateAccessToken,
  generateRefreshToken
} = require("../../functions/jwt");

module.exports = (async (req, res) => {
  const { userEmail, userPassword } = req.body;

  if (!userEmail) {
    return res.status(400).send({
      message: "이메일을 입력해주세요."
    })
  }

  if (!userPassword) {
    return res.status(400).send({
      message: "비밀번호를 입력해주세요."
    })
  }

  const userInfo = await User.findOne({
    where: { userEmail },
    raw: true
  });

  if (!userInfo) {
    return res.status(400).send({
      message: "이메일을 확인해주세요."
    })
  } else {
    const hash = crypto.SHA256(userPassword, process.env.SALT).toString();

    if (hash !== userInfo.userPassword) {
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