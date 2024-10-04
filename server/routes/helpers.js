const checkRes = (res, resList) => {
  if(!resList.length) {
    return res.status(404).json({ error: 'please check model' })
  }

  return res.json(resList)
}


const getAll = (res, model, assocModels) => {
  if(assocModel) {
    model.findAll({
      include: assocModels.map(assocModel => ({ model: assocModel }))
    })
    .then(resList => checkRes(res, resList))
  } else {
    model.findAll()
    .then(resList => checkRes(res, resList))
  }
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
