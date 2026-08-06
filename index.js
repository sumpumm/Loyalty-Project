const express = require('express');
const dns = require('dns');
const path = require('path');

const app = express();
const PORT = 8000;

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

app.set('view engine','ejs');
app.set('views',path.resolve("./views"))

app.get('/',(rqe,res)=>{
    return res.render('home');
})

app.listen(PORT,()=>console.log(`SERVER STARTED AT PORT: ${PORT}`));
