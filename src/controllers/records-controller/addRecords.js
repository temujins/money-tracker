async function addToRecords(req, res) {
  const validation = require('../../utils/validations');
  const isValid = validation.checkUserData(req.body);

  if (isValid) {
    try {
      // const {} = req.body;

      res.status(201).json({
        success: true,
        new_record: {
          text: 'this is a new record',
        },
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: new Error(
          'Server is unable to add your record, please try again later.'
        ),
      });
    }
  } else {
    res.status(404).json({
      success: false,
      error: new Error(
        'Your input is invalid please provide valid information!'
      ),
    });
  }
}

module.exports = addToRecords;
