const { Incomes, Expenses } = require('../../models/record.schema');
const sendResult = require('../../utils/sendResult');

async function addToIncomes(req, res) {
    const { text, amount } = req.body;
    const income = new Incomes({ text: text, amount: amount });

    try {
        const record = await income.save();
        sendResult(res, 201, { success: true, data: record });
    } catch (err) {
        sendResult(res, {
            message: 'Unable to save the record. Please try again later',
            error: err,
        });
    }
}

async function addToExpenses(req, res) {
    const { text, amount } = req.body;
    const expense = new Expenses({ text: text, amount: amount });
    try {
        const record = await expense.save();
        sendResult(res, 201, { success: true, data: record });
    } catch (err) {
        sendResult(res, {
            message: 'Unable to save the record. Please try again later',
            error: err,
        });
    }
}

module.exports = { addToIncomes, addToExpenses };
