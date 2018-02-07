const router = require('express').Router()
const songController = require('../../controllers/songController')

// Matches with "/api/spotify"
router
.route('/')
.get(songController.findAll)

module.exports = router