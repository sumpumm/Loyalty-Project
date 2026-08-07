const BUSINESS = require('../models/business');
const WALLET = require('../models/wallet');
const { getUser } = require("../services/auth");

async function handleUserDashboard(req,res){
    const {_id,email,iat} = req.user;
    return res.render('userDashboard',{email});
}

async function handleSearch(req,res){
    try{
        const search = req.query.search || "";
        const businesses = await BUSINESS.find({businessName:{$regex:search,$options:"i"}},{businessName:1});
        return res.json({businesses});
    }catch(err){
        console.log(err)
    }

}

async function handleBusinessAdd(req,res){
    try{
        const userToken = req.cookies.token;
        const user = getUser(userToken);
        const userId = user._id;

        const businessId = req.body.businessId;
        
        const wallet = await WALLET.create({ user: userId, business: businessId}).then(()=>{
            res.render('userDashboard');
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    handleUserDashboard,
    handleSearch,
    handleBusinessAdd,
}