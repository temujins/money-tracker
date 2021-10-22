const sendResult = require('../utils/sendResult');

function healthCheckController(req, res) {
    sendResult(res, 200, { success: true, message: 'Server is running' });
}

module.exports = healthCheckController;
