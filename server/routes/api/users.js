const router = require('express').Router()
const usersController = require('../../database/controllers/usersController')

// Matches with "/api/users"
router.route('/')
  .get(usersController.findAll)
  .post(usersController.create)
router.route('/login/:username')
  .post(usersController.findOne)
// Matches with "/api/users/:id"
router.route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .put(usersController.addTrail)
  .delete(usersController.remove)
// Matches with 'api/users/getuser'
router.get('/getuser', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
    res.json({ user: req.user })
  } else {
    res.json({ user: null })
  }
})
module.exports = router
