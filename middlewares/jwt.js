require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const {
  invalidToken,
  expireToken
} = require("./errorcode");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1m" });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET);
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
    const token = authorization.split(" ")[1];
    try {
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      next(data);
    }
    catch (err) {
      if (err.message === "jwt expired") {
        return next(expireToken);
      } else {
        return next(invalidToken);
      }
    }
  },

  checkRefreshToken: (refreshToken) => {
    return verify(refreshToken, process.env.REFRESH_SECRET);
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