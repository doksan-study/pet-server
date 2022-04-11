const { user } = require("../../models");
const crypto = require("crypto-js");

const {
  emailExists
} = require("../../middlewares/error")

module.exports = (async (req, res) => {
  const { userName, userEmail, userPassword, userNickname, userPhone, userAge, userGender, userAddress } = req.body;
  const userProfileImg = req.file.path;

  const emailCheck = await user.findOne({ where: { email: userEmail } }); //중복되는 이메일이 있는 유저가 있는지 확인

  if (emailCheck) {
    return res.status(emailExists.status).send({
      code: emailExists.code,
      message: emailExists.message
    })
  } else {
    const hash = crypto.SHA256(userPassword, process.env.SALT).toString(); //비밀번호 암호화

    await user.create({ //새로운 유저 생성
      email: userEmail,
      password: hash,
      name: userName,
      nickname: userNickname,
      phone: userPhone,
      profile_image: userProfileImg,
      age: userAge,
      gender: userGender,
      address: userAddress
    });
    const userInfo = await user.findOne({ //생성된 유저 정보
      where: { email: userEmail },
      raw: true
    });

    delete userInfo.password;

    return res.status(201).send({
      message: "회원가입이 완료되었습니다.",
      data: userInfo
    });
  }
})
