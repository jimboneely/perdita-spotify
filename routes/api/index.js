const router = require('express').Router()
// const commentRoutes = require('./comments')
const spotifyRoutes = require('./spotify')

// router.use('/comments', commentRoutes)
router.use('/spotify', spotifyRoutes)

module.exports = router