const router = require('express').Router()

router.use('/api', require('./exerciseRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router