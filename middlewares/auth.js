module.exports = {
  isLoggedIn: (req, res, next) => {
    req.headers.authorization
      ? next()
      : res.status(401).send('로그인이 필요합니다.');
  },

  isNotLoggedIn: (req, res, next) => {
    !req.headers.authorization
      ? next()
      : res.status(401).send('로그인 하지 않은 사용자만 접근 가능 합니다.');
  }
}