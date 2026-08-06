async function handleDashboard(req,res){
    const {_id,email,iat} = req.user;
    return res.render('dashboard',{email});
}

module.exports = {
    handleDashboard,
}