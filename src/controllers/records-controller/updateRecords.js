const { Incomes, Expenses } = require('../../models/record.schema');
const sendResult = require('../../utils/sendResult');

async function findAndUpdate(req, res, model) {
    await model.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        amount: req.body.amount,
    });
    sendResult(res, 201, { success: true, message: 'Update successful' });
}

async function updateIncomeRecord(req, res) {
    try {
        await findAndUpdate(req, res, Incomes);
    } catch (err) {
        sendResult(res, { message: 'Server timeout', error: err });
    }
}

async function updateExpenseRecord(req, res) {
    try {
        await findAndUpdate(req, res, Expenses);
    } catch (err) {
        sendResult(res, { message: 'Server timeout', error: err });
    }
}

module.exports = { updateIncomeRecord, updateExpenseRecord };
