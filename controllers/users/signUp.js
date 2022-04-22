const { user } = require("../../models");
const crypto = require("crypto-js");

const {
  emailExists
} = require("../../middlewares/errorcode")

module.exports = (async (req, res) => {
  const { name, email, password, nickname, phone, age, gender, address } = req.body;
  const profileImg = req?.file?.path;

  const emailCheck = await user.findOne({ where: { email } }); //중복되는 이메일이 있는 유저가 있는지 확인

  if (emailCheck) {
    return next(emailExists);
  } else {
    const hash = crypto.SHA256(password, process.env.SALT).toString(); //비밀번호 암호화

    await user.create({ //새로운 유저 생성
      email,
      password: hash,
      name,
      nickname,
      phone,
      profile_image: profileImg,
      age,
      gender,
      address
    });
    const userInfo = await user.findOne({ //생성된 유저 정보
      where: { email },
      raw: true
    });

    delete userInfo.password;

    return res.status(201).send({
      message: "회원가입이 완료되었습니다.",
      data: userInfo
    });
  }
})