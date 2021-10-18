const express = require('express');
const router = express.Router();
const healthCheckRoute = require('./healthCheck.route');
const recordsRoute = require('./records.route');

router.use(healthCheckRoute);
router.use(recordsRoute);

module.exports = router;
