const express = require('express');
const router = express.Router();
const healthCheckRoute = require('./healthCheckRoute');

router.use(healthCheckRoute);

module.exports = router;
