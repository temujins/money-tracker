const { addToIncomes, addToExpenses } = require('./addRecords');
const getRecords = require('./getRecords');
const { updateIncomeRecord, updateExpenseRecord } = require('./updateRecords');

module.exports = {
    addToIncomes,
    addToExpenses,
    getRecords,
    updateIncomeRecord,
    updateExpenseRecord,
};
