const express = require("express");
const router = express.Router();
const { User } = require("../../models");
const crypto = require("crypto-js");

module.exports = (async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userNickname, userPhone, userProfileImg, userAge, userGender, userAddress } = req.body;

    const emailCheck = await User.findOne({ where: { userEmail } }); //중복되는 이메일이 있는 유저가 있는지 확인
    if (emailCheck) {
      return res.status(400).send({
        message: "중복되는 이메일이 존재합니다.",
        data: null
      })
    } else {
      const hash = crypto.SHA256(userPassword, process.env.SALT).toString(); //비밀번호 암호화

      await User.create({ userName, userEmail, userPassword: hash, userNickname, userPhone, userProfileImg, userAge, userGender, userAddress }); //새로운 유저 생성
      const userInfo = await User.findOne({ where: { userEmail } }); //생성된 유저 정보

      return res.status(201).send({
        message: "회원가입이 완료되었습니다.",
        data: userInfo
      });
    }
  }
  catch (error) {
    return res.status(500).send({
      message: error.message,
      data: null
    })
  }
})
