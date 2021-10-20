const express = require('express');
const router = express.Router();
const healthCheckRoute = require('./healthCheck.route');
const recordsRoute = require('./records.route');
const checkRecordData = require('../middleware/checkRecordData');
const { checkIncome, checkExpense } = require('../middleware/checkRecords');

/** @middleware */
router.post('/api/v1/records/add/*', checkRecordData);
router.put('/api/v1/records/update/income/:id', checkIncome);
router.put('/api/v1/records/update/expense/:id', checkExpense);

/** @routes */
router.use(healthCheckRoute);
router.use(recordsRoute);

module.exports = router;
