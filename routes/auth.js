const express = require('express');
const {handleUserSingup} = require('../controllers/auth');

const router = express.Router();

router.post('/',handleUserSingup);

module.exports = router;