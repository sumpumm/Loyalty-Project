const express = require('express');
const { handleUserDashboard } = require('../controllers/user');

const router = express.Router();

router.get('/',handleUserDashboard);

module.exports = router;