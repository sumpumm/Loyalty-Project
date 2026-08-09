const BUSINESS = require('../models/business');
const WALLET = require('../models/wallet');
const { getUser } = require("../services/auth");

async function handleUserDashboard(req,res){
    const userWallet = await WALLET.find({user:req.user._id},{business:1});
    const businessIds = userWallet.map(wallet=>wallet.business);
    const businesses = await Promise.all(businessIds.map(async (id)=> {return await BUSINESS.findOne({_id:id},{businessName:1})}));
    const businessName = businesses.map(business=>business.businessName);
    return res.render('userDashboard',{businessName});
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

        const checkWalletExists = await WALLET.findOne({business:businessId, user:userId});

        if (checkWalletExists) return res.json({error:'wallet already added'});
        
        const wallet = await WALLET.create({ user: userId, business: businessId});
        return res.json({message:'wallet added successfully'});
       
    }catch(err){
        console.log(err);
    }
}

async function handleJoin(req,res){
    res.render('discover');
}

module.exports = {
    handleUserDashboard,
    handleSearch,
    handleBusinessAdd,
    handleJoin
}