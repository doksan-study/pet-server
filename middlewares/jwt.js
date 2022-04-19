require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const {
  invalidToken,
  expireToken
} = require("./errorcode");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SALT);
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SALT);
  },

  sendToken: (res, accessToken, refreshToken) => {
    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true
      })
      .send({
        message: "로그인이 성공했습니다.",
        data: {
          accessToken,
          refreshToken
        },
      });
  },

  isAuthorized: (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return invalidToken
    }
    const token = authorization.split(" ")[1];
    try {
      const data = jwt.verify(token, process.env.ACCESS_SALT);
      return data;
    }
    catch (err) {
      if (err.message === "jwt expired") {
        return expireToken
      } else {
        return invalidToken
      }
    }
  },

  checkRefreshToken: (refreshToken) => {
    return verify(refreshToken, process.env.REFRESH_SALT);
  },

  resendAccessToken: (res, accessToken) => {
    return res.status(200).send({
      message: "재발급 완료했습니다.",
      data: {
        accessToken
      }
    });
  },
};