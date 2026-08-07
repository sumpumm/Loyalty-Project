const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    return res.render('home');
});

router.get('/login',(req,res)=>{
    return res.render('userLogin');
});

router.get('/signup',(req,res)=>{
    return res.render('userSignup');
});

router.get('/businessSignup',(req,res)=>{
    return res.render('businessSignup');
});

router.get('/businessLogin',(req,res)=>{
    return res.render('businessLogin');
});

router.get('/userDashboard',(req,res)=>{
    return res.render('userDashboard');
});

router.get('/discover',(req,res)=>{
    return res.render('discover');
});


module.exports = router;