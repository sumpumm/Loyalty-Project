async function handleUserDashboard(req,res){
    const {_id,email,iat} = req.user;
    return res.render('userDashboard',{email});
}

module.exports = {
    handleUserDashboard,
}