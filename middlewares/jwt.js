require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "2h" });
  },

  sendToken: (res, accessToken, refreshToken) => {
    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        sameSite: "none",
        secure: true,
        httpOnly: true,
      })
      .send({
        message: "로그인 완료",
        data: {
          accessToken,
          refreshToken
        },
      });
  },

  isAuthorized: (req, res) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).send({ message: "토큰을 확인해주세요." });
    } else {
      const token = authorization.split(" ")[1];
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      if (!data) {
        return res.status(400).send({ message: "토큰이 없는 잘못된 접근입니다." });
      } else {
        return data;
      }
    }
  },

  checkRefreshToken: (refreshToken) => {
    return verify(refreshToken, process.env.REFRESH_SECRET);
  },

  resendAccessToken: (res, accessToken) => {
    return res.status(200).send({
      message: "accessToken 재발급 완료",
      data: {
        accessToken
      }
    });
  },
};