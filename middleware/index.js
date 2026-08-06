const { getUser } = require("../services/auth");

function checkAuth(){
    return async (req,res,next)=>{
        const userToken = req.cookies.token;
        if (!userToken) return res.redirect('/login');
        const user = getUser(userToken);
        if (user===null) return res.redirect('/login');
        req.user = user;
        next();
    }
}

module.exports = {
    checkAuth,
}