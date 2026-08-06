const express = require('express');
const { handleDashboard } = require('../controllers/business');

const router = express.Router();

router.get('/',handleDashboard);

module.exports = router;