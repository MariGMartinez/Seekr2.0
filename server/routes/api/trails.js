const router = require('express').Router()
const trailsController = require('../../database/controllers/trailsController')

// Matches with "/api/trails"
router.route('/')
  .get(trailsController.findAll)
  .post(trailsController.create)
router.route('/find/:id')
  .get(trailsController.findByName)
// Matches with "/api/trails/:id"
router.route('/:id')
  .get(trailsController.findById)
  .put(trailsController.update)
  .delete(trailsController.remove)

module.exports = router
