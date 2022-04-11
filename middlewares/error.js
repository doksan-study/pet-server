module.exports = {
  notMatchEmail: {
    status: 401,
    code: "CMP401100",
    messsage: "이메일을 확인해주세요."
  },

  notMatchPassword: {
    statuss: 401,
    code: "CMP401101",
    message: "비밀번호가 틀렸습니다."
  },

  emailExists: {
    status: 409,
    code: "CMP409100",
    message: "중복되는 이메일이 존재합니다."
  },

  unknownError: {
    status: 500,
    code: "CMP000000",
    message: "오류가 발생하였습니다."
  }
}