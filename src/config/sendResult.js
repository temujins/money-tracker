function sendResult(
    res,
    status = 500,
    { success = false, message = '', error = '', data = [] }
) {
    res.status(status).json({ success, message, error, data });
}

module.exports = sendResult;
