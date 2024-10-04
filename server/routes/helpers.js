const checkRes = (res, resList) => {
  if(!resList) {
    return res.status(404).json({ error: 'please check model' })
  }

  return res.json(resList)
}


const getAll = (res, model, assocModels) => {
  if(assocModels) {
    model.findAll({
      include: assocModels.map(assocModel => ({ model: assocModel }))
    })
    .then(list => checkRes(res, list))
  } else {
    model.findAll()
    .then(list => checkRes(res, list))
  }
}

const findById = (req, res, model, assocModels) => {
  if(assocModels) {
    model.findByPk(req.params.id, {
      include: assocModels.map(assocModel => ({ model: assocModel }))
    })
    .then(found => checkRes(res, found))
  } else {
    model.findByPk(req.params.id)
    .then(found => checkRes(res, found))
  }
}

module.exports = {
  getAll,
  findById
}
