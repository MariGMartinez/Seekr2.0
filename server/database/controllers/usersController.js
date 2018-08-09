const db = require('../models')

// Defining methods for the UsersController
const UsersController = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOne: function (req, res, next) {
    db.User
      .where()
      .findOne({ username: req.params.username }, (err, dbModel) => {
        if (err) throw err
        // test a matching password
        dbModel.comparePassword(`${req.body.password}`, function (err, isMatch) {
          if (err) throw err
          if (isMatch) {
            return res.json(dbModel)
          } else {
            var err = new Error('Wrong email or password.')
            err.status = 401
            return next(err)
          }
        })
      })
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => { res.json(dbModel) })
      .catch(err => res.status(422).json(err))
  },
  addTrail: function (req, res) {
    db.User
    /* .update(
                {_id: {$in: req.params.id}},
                { $push:req.body },
                {new: true, upsert: true, safe: true}) */
    // .findById(req.params.id)
      .then(dbModel => {
        dbModel.insertMany(req.body)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
module.exports = UsersController
