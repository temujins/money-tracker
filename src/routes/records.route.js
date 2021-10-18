const express = require('express');
const router = express.Router();
const controller = require('../controllers/records-controller');

/**
 * @route /api/v1/record
 * @method GET
 * @func getAllRecords()
 */
router.get('/api/v1/records', controller.getRecords.all);

/**
 * @route /api/v1/records/incomes
 * @method GET
 * @func getIncomeRecords()
 */
router.get('/api/v1/records/incomes', controller.getRecords.incomes);

/**
 * @route /api/v1/records/expenses
 * @method GET
 * @func getExpenseRecords()
 */
router.get('/api/v1/records/expenses', controller.getRecords.expenses);

/**
 * @route /api/v1/records/add
 * @method POST
 * @func addToRecords()
 */
router.post('/api/v1/records/add', controller.addRecords);

module.exports = router;
