const router = require('express').Router()
const trailRoutes = require('./trails.js')
const userRoutes = require('./users.js')

// trail routes
router.use('/trails', trailRoutes)
router.use('/users', userRoutes)

module.exports = router
