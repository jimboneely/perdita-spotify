const router = require('express').Router()
const userRoutes = require('./users')

router.use('/login', userRoutes)

module.exports = router