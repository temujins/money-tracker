const sendStatus = require('../config/sendResult');

function healthCheckController(req, res) {
    sendStatus(res, 200, { success: true, message: 'Server is running' });
}

module.exports = healthCheckController;
