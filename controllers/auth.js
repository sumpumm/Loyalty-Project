const USER = require('../models/user');
const bcrypt = require('bcryptjs');
const { setUser } = require('../services/auth');

async function handleUserSingup(req,res){
    try{
        const {firstName,lastName,email,password} = req.body;
        const hashedPassword = bcrypt.hashSync(password);
        await USER.create({firstName,lastName,email,password: hashedPassword}).then(()=>{
            res.render('login',{alertMessage:"User has been created."});
        });
    }catch(error){
        res.render('signup',{alertMessage : "Email already exists"});
    }
    
}

async function handleUserLogin(req,res){
    try{
        const {email,password} = req.body;
        const user = await USER.findOne({email});
        if (!user){
            return res.status(404).json({message:"user not found"});
        }
        const isPassword = bcrypt.compareSync(password,user.password);
        if (!isPassword){
            return res.status(401).json({message:"incorrect password"});
        }
        const token = setUser(user);
        res.cookie("token",token);
        return res.redirect('/api/business');
    }catch(error){
        return res.status(409).json({message : error});
    }
}

module.exports={
    handleUserSingup,
    handleUserLogin,
}