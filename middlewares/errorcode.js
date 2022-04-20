module.exports = {
  // 400 Error
  noAuthType: {
    status: 400,
    message: "로그인 타입을 입력해주세요.",
    errorCode: "LNY400100"
  },

  noUsername: {
    status: 400,
    message: "유저 아이디를 입력해주세요.",
    errorCode: "LNY400101"
  },

  noAdminName: {
    status: 400,
    message: "아이디를 입력해주세요.",
    errorCode: "LNY400102"
  },

  noAdminPW: {
    status: 400,
    message: "비밀번호를 입력해주세요.",
    errorCode: "LNY400103"
  },

  // 401 Error
  notMatchAdminPW: {
    status: 401,
    message: "비밀번호를 확인해주세요.",
    errorCode: "LNY401100"
  },

  invalidToken: {
    status: 401,
    message: "올바르지 않은 토큰입니다.",
    errorCode: "LNY401101"
  },

  expireToken: {
    status: 401,
    message: "만료된 토큰입니다.",
    errorCode: "LNY401102"
  },

  notLoggedIn: {
    status: 401,
    message: "로그인 한 유저는 접근할 수 없습니다.",
    errorCode: "LNY401103"
  },

  // 403 Error
  unauthorized: {
    status: 403,
    message: "권한이 부족합니다.",
    errorCode: "LNY403100"
  },

  // 404 Error
  notMatchEmail: {
    status: 404,
    message: "가입되어있지 않은 이메일입니다.",
    errorCode: "LNY404100"
  },

  notMatchAdminName: {
    status: 404,
    message: "가입되어있지 않은 아이디입니다.",
    errorCode: "LNY404101"
  },

  // 409 Error
  emailExists: {
    status: 409,
    message: "이미 가입 되어있는 이메일 입니다.",
    errorCode: "LNY409100"
  },

  // Unknown Error
  unknownError: {
    status: 500,
    message: "오류가 발생하였습니다.",
    errorCode: "LNY999999"
  }
}