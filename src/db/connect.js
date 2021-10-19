const mongoose = require('mongoose');
const config = require('../config/config');

module.exports = async function connectToDb() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('Connected to the database');
  } catch (err) {
    console.log(new Error(err));
    process.exit(1);
  }
};
