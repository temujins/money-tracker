const { Incomes, Expenses } = require('../models/record.schema');
const sendResult = require('../config/sendResult');

function sendError(res) {
    sendResult(res, 404, {
        message: "Record doesn't exist",
        error: 'Invalid record id',
    });
}

async function checkIncome(req, res, next) {
    const record = await Incomes.findById(req.params.id);
    if (record) {
        next();
    } else {
        sendError(res);
    }
}

async function checkExpense(req, res, next) {
    const record = await Expenses.findById(req.params.id);
    if (record) {
        next();
    } else {
        sendError(res);
    }
}

module.exports = { checkIncome, checkExpense };
