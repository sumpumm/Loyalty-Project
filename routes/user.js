const express = require('express');
const { handleUserDashboard, handleSearch, handleBusinessAdd } = require('../controllers/user');

const router = express.Router();

router.get('/',handleUserDashboard);
router.get('/businesses',handleSearch);
router.post('/add',handleBusinessAdd);
module.exports = router;