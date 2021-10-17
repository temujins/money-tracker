function healthCheckController(req, res) {
  res.status(200).json({
    success: true,
    message: 'Health check successful',
  });
}

module.exports = healthCheckController;
