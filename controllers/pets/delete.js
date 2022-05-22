const { pet } = require("../../models");

module.exports = (async (req, res) => {
  const { id } = req.query

  await pet.update({ delete_status: 1 }, { where: { id } })

  return res.status(204).send()
})