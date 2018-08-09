const db = require('../models')

// Defining methods for the TrailsController
const TrailsController = {
  findAll: function (req, res) {
    db.Trail
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByName: function (req, res) {
    db.Trail
    // .where({ name: req.params.name })
      .findOne({ id: req.params.id }, (err, dbModel) => {
        if (err) throw err
        console.log(dbModel)
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.Trail
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Trail
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Trail
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Trail
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
module.exports = TrailsController
