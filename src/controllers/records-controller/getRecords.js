const { Incomes, Expenses } = require('../../models/record.schema');

async function all(req, res) {
  try {
    const incomes = await Incomes.find({});
    const expenses = await Expenses.find({});

    res.status(201).json({
      success: true,
      records: {
        incomes,
        expenses,
      },
    });
  } catch (err) {
    res.status(404).json({ success: false, error: new Error(err) });
  }
}

async function incomes(req, res) {
  try {
    const incomes = await Incomes.find({});

    res.status(201).json({
      success: true,
      records: incomes,
    });
  } catch (err) {
    res.status(404).json({ success: false, error: new Error(err) });
  }
}

async function expenses(req, res) {
  try {
    const expenses = Expenses.find({});

    res.status(201).json({
      success: true,
      records: expenses,
    });
  } catch (err) {
    res.status(404).json({ success: false, error: new Error(err) });
  }
}

module.exports = {
  all,
  incomes,
  expenses,
};
