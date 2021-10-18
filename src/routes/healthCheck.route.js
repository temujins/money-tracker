const express = require('express');
const router = express.Router();
const controller = require('../controllers/healthCheck.controller');

/**
 * @route /api/v1/health-check
 * @method GET
 */
router.get('/api/v1/health-check', controller);

module.exports = router;
