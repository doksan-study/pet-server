module.exports = {
  notMatchEmail: (res) => {
    return res.status(401).send({
      message: "이메일을 확인해주세요.",
      data: {
        errorCode: "CMP401100"
      }
    })
  },

  notMatchPassword: (res) => {
    return res.status(401).send({
      message: "비밀번호가 틀렸습니다.",
      data: {
        errorCode: "CMP401101",
      }
    })
  },

  emailExists: (res) => {
    return res.status(409).send({
      message: "중복되는 이메일이 존재합니다.",
      data: {
        errorCode: "CMP409100",
      }
    })
  },

  unknownError: (res) => {
    return res.status(500).send({
      message: "오류가 발생하였습니다.",
      data: {
        errorCode: "CMP000000",
      }
    })
  }
}