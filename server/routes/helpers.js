const getAll = (res, model) => {
  model.findAll()
  .then(list => {
    if(!list.length) {
      return res.status(404).json({ error: 'please check model' })
    }
    return res.json(list)
  })
}

const findById = (req, res, model) => {
  model.findByPk(req.params.id)
  .then(found => {
    if(!found) {
      return res.status(404).json({ error: `Data not found. Check the id parameter you passed in` })
    }
    return res.json(found)
  })
}

module.exports = {
  getAll,
  findById
}
