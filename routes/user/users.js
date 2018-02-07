const router = require('express').Router()
const userController = require('../../controllers/userController')

// Matches with "/user/login"
router
.route('/')
.get(userController.login)

router
.route('/callback')
.get(userController.callback)

module.exports = router