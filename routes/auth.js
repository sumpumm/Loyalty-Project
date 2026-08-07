const express = require('express');
const {handleUserSingup,handleUserLogin,handleBusinessSingup,handleBusinessLogin} = require('../controllers/auth');

const router = express.Router();

router.post('/',handleUserSingup);
router.post('/login',handleUserLogin);
router.post('/business',handleBusinessSingup);
router.post('/business/login',handleBusinessLogin);

module.exports = router;