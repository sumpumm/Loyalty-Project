const WALLET = require('../models/wallet');
const USER = require('../models/user');

async function handleDashboard(req,res){
    const {_id,email,iat} = req.user;
    const users = await WALLET.find({business:_id},{user:1,_id:0});

    const userNames = await Promise.all(users.map(async (userIdObject) => {return await USER.findOne({_id:userIdObject.user},{firstName:1,lastName:1,email:1})}));
    return res.render('dashboard',{email,userNames});
}

module.exports = {
    handleDashboard,
}