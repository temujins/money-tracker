const express = require('express');
const router = express.Router();
const {
    getRecords,
    addToIncomes,
    addToExpenses,
    updateIncomeRecord,
    updateExpenseRecord,
} = require('../controllers/records-controller');
const checkRecordData = require('../middleware/checkRecordData');

/**
 * @route /api/v1/record
 * @method GET
 * @func getAllRecords()
 */
router.get('/api/v1/records', getRecords.all);

/**
 * @route /api/v1/records/incomes
 * @method GET
 * @func getIncomeRecords()
 */
router.get('/api/v1/records/incomes', getRecords.incomes);

/**
 * @route /api/v1/records/expenses
 * @method GET
 * @func getExpenseRecords()
 */
router.get('/api/v1/records/expenses', getRecords.expenses);

/**
 * @route /api/v1/records/add/income
 * @method POST
 * @func addToIncome()
 */
router.post('/api/v1/records/add/income', addToIncomes);

/**
 * @route /api/v1/records/add/expense
 * @method POST
 * @func addToExpense()
 */
router.post('/api/v1/records/add/expense', addToExpenses);

/**
 * @route /api/v1/records/update/income/:id
 * @method PUT
 * @func updateIncomeRecord()
 */
router.put('/api/v1/records/update/income/:id', updateIncomeRecord);

/**
 * @route /api/v1/records/update/expense/:id
 * @method PUT
 * @func updateExpenseRecord()
 */
router.put('/api/v1/records/update/expense/:id', updateExpenseRecord);

module.exports = router;
