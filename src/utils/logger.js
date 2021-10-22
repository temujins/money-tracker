function logger(url = '/', status = 500, message = '', error = '') {
    console.log(
        `URL:[${url}];`,
        `STATUS:[${status}];`,
        `MESSAGE:[${message}];`,
        `ERROR:[${error}];`
    );
}

module.exports = logger;
