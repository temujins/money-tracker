const { Incomes, Expenses } = require('../../models/record.schema');
const sendResult = require('../../utils/sendResult');

async function all(req, res) {
    try {
        const incomes = await Incomes.find({});
        const expenses = await Expenses.find({});

        sendResult(res, 201, { success: true, data: { incomes, expenses } });
    } catch (err) {
        res.status(404).json({ success: false, error: new Error(err) });
    }
}

async function incomes(req, res) {
    try {
        const incomes = await Incomes.find({});
        sendResult(res, 201, { success: true, data: incomes });
    } catch (err) {
        sendResult(res, 404, { error: err });
    }
}

async function expenses(req, res) {
    try {
        const expenses = await Expenses.find({});
        sendResult(res, 201, { success: true, data: expenses });
    } catch (err) {
        sendResult(res, 404, { error: err });
    }
}

module.exports = {
    all,
    incomes,
    expenses,
};
