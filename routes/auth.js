const express = require('express');
const {handleUserSingup,handleUserLogin} = require('../controllers/auth');

const router = express.Router();

router.post('/',handleUserSingup);
router.post('/login',handleUserLogin);

module.exports = router;