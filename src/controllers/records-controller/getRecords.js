async function all(req, res) {
  try {
    res.status(201).json({
      success: true,
      records: ['Records are here!'],
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, error: new Error('Unable to find records!') });
  }
}

async function incomes(req, res) {
  try {
    res.status(201).json({
      success: true,
      records: ['Income records are here!'],
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, error: new Error('Unable to find records!') });
  }
}

async function expenses(req, res) {
  try {
    res.status(201).json({
      success: true,
      records: ['Expense records are here!'],
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, error: new Error('Unable to find records!') });
  }
}

module.exports = {
  all,
  incomes,
  expenses,
};
