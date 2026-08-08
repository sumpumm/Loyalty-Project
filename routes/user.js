const express = require('express');
const { handleUserDashboard, handleSearch, handleBusinessAdd, handleJoin } = require('../controllers/user');

const router = express.Router();

router.get('/',handleUserDashboard);
router.get('/join',handleJoin);
router.get('/businesses',handleSearch);
router.post('/add',handleBusinessAdd);
module.exports = router;