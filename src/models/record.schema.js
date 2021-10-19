const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Incomes = mongoose.model('Incomes', recordSchema);
const Expenses = mongoose.model('Expenses', recordSchema);

module.exports = { Incomes, Expenses };
