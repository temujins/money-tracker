function checkUserData(body = null) {
  if (!body) return console.log('Unable to find data!');
  if (body.text && body.amount) return true;
  return false;
}

module.exports = { checkUserData };
