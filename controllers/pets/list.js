const { pet } = require("../../models");

module.exports = (async (req, res) => {
  const offset = (parseInt(page) - 1) * parseInt(limit);
  let order;

  switch (sort) {
    case "0":
      order = ["created_at", "DESC"]
      break;
    case "1":
      order = ["created_at", "ASC"]
      break;
  }

  const petList = await pet.findAndCountAll({
    offset,
    limit,
    order: [
      order
    ],
    where: {
      delete_status: 0
    }
  })

  return res.status(200).send({
    message: "유기견 공고 목록 조회 완료",
    data: petList
  })
})