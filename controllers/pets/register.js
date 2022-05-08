const { pet } = require("../../models");

module.exports = (async (req, res) => {
  const { findPlace, findDate, name, breed, gender, specificity, age, height, finderPhone } = req.body;
  const image = req?.file?.path;

  await pet.create({
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
  })

  return res.status(201).send({
    message: "유기견 공고 등록이 완료되었습니다.",
    data: null
  })
})