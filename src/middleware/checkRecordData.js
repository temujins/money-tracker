const sendResult = require('../utils/sendResult');

function checkRecordData(req, res, next) {
    if (
        req.body.text &&
        req.body.amount &&
        typeof req.body.text === 'string' &&
        typeof req.body.amount === 'string'
    ) {
        next();
    } else {
        sendResult(res, 404, {
            message: 'Text and Amount is required',
            error: 'Invalid input',
        });
    }
}

module.exports = checkRecordData;
