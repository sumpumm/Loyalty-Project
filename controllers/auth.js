const USER = require('../models/user');

async function handleUserSingup(req,res){
    const {firstName,lastName,email,password} = req.body;
    await USER.create({firstName,lastName,email,password});
    return res.json({status:"user created successfully"});
}

module.exports={
    handleUserSingup,
}