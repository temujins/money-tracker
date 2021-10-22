const logger = require('./logger');

function sendResult(
    res,
    status = 500,
    { success = false, message = '', error = '', data = [] }
) {
    res.status(status).json({ success, message, error, data });
    logger(res.req.url, status, message, error, res.req.url);
}

module.exports = sendResult;
