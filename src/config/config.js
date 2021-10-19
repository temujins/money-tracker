const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:5432/money-tracker';

module.exports = {
  PORT,
  MONGO_URI,
};
