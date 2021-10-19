const { checkUserData } = require('../../utils/validations');
const { Incomes, Expenses } = require('../../models/record.schema');

async function addToIncomes(req, res) {
  const isValid = checkUserData(req.body);

  if (isValid) {
    const { text, amount } = req.body;
    const income = new Incomes({ text: text, amount: amount });
    await income.save();

    res.status(201).json({
      success: true,
      result: income,
    });
    return;
  }

  res.status(404).json({
    success: false,
    error: 'Your input is invalid please provide valid information!',
  });
}

async function addToExpenses(req, res) {
  const isValid = checkUserData(req.body);

  if (isValid) {
    const { text, amount } = req.body;
    const expense = new Expenses({ text: text, amount: amount });
    await expense.save();

    res.status(201).json({
      success: true,
      result: expense,
    });
    return;
  }

  res.status(404).json({
    success: false,
    error: 'Your input is invalid please provide valid information!',
  });
}

module.exports = { addToIncomes, addToExpenses };
