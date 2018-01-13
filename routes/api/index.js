const router = require("express").Router();
const doSomethingRoute = require('./doSomething');

router.use('/dosomething', doSomethingRoute);

module.exports = router;