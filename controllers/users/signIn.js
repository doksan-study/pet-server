const { user } = require("../../models");
const crypto = require("crypto-js");

const {
  generateAccessToken,
  generateRefreshToken
} = require("../../middlewares/jwt");

const {
  notMatchEmail,
  notMatchPassword
} = require("../../middlewares/errorcode");

module.exports = (async (req, res) => {
  const { userEmail, userPassword } = req.body;

  const userInfo = await user.findOne({
    where: { email: userEmail },
    raw: true
  });

  if (!userInfo) {
    return next(notMatchEmail);
  } else {
    const hash = crypto.SHA256(userPassword, process.env.SALT).toString();

    if (hash !== userInfo.password) {
      return next(notMatchPassword);
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