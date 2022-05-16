const { pet } = require("../../models");

module.exports = (async (req, res) => {
  const { id, findPlace, findDate, name, breed, gender, specificity, age, height, finderPhone } = req.body;

  await pet.update({
    name: name,
    mac_address: macAddress,
  },
    {
      where: {
        id
        image,
        findPlace,
        findDate,
        name,
        breed,
        gender,
        specificity,
        age,
        height,
        finderPhone
        delete_status: 0,
      }
    }
  )


  return res.status(200).send({
    message: "유기견 공고 수정 완료",
    data: null
  })
})