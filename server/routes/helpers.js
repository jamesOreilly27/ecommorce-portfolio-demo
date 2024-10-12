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

const getAllWhere = (res, model, condition, assocModels) => {
  if (assocModels) {
    model.findAll({
      where: condition, // Add the condition here
      include: assocModels.map((assocModel) => ({ model: assocModel }))
    })
    .then((list) => checkRes(res, list))
  } else {
    model.findAll({
      where: condition,
    })
    .then((list) => checkRes(res, list))
  }
}

const findById = (req, res, model, assocModels, nestedAssocModels) => {
  if(assocModels) {
    model.findByPk(req.params.id, {
      include: assocModels.map(assocModel => {
        const nestedAssoc = nestedAssocModels && nestedAssocModels[assocModel.name]
        return nestedAssoc ? { model: assocModel, include: nestedAssoc } : { model: assocModel }
      })})
    .then(found => checkRes(res, found))
  } else {
    model.findByPk(req.params.id)
    .then(found => checkRes(res, found))
  }
}

const updateRow = (req, res, model) => {
  model.update(req.body, {
    where: { id: req.params.id },
    returning: true
  })
    .then(updated => res.json(updated))
}

const insertRow = (req, res, model) => {
  model.create(req.body)
  .then(created => res.json(created))
}

const upsert = (req, res, model) => {
  model.findByPk(req.params.id)
  .then(row => {
    if(row) {
      updateRow(req, res, model)
    } else {
      insertRow(req, res, model)
    }
  })
}

const destroy = (req, res, model) => {
  model.destroy({
    where: { id: req.params.id }
  })
}

module.exports = {
  getAll,
  getAllWhere,
  findById,
  upsert,
  destroy
}
