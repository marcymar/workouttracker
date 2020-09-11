const router = require('express').Router()

router.use('/api', require('./exerciseRoutes.js'))
router.use('/api', require('./statsRoutes.js'))

module.exports = router