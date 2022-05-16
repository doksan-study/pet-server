const { pet } = require("../../models");

module.exports = (async (req, res) => {
  const { id } = req.body;

  const petList = await pet.findOne({
    where: {
      id
      delete_status: 0,
    }
  })

  return res.status(200).send({
    message: "유기견 공고 조회 완료",
    data: petList
  })
})