const router = require("express").Router();
const somethingController = require("../../controllers/somethingController");

router.route('/').get(somethingController.doIt)

module.exports = router;