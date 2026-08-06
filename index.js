const express = require('express');
const dns = require('dns');
const path = require('path');
const {connectMongoDb} = require('./conn/connection');
const cookieParser = require("cookie-parser");

//routes
const staticRoute = require('./routes/staticRouter');
const authRoute = require('./routes/auth');
const businessRoute = require('./routes/business');

//middlewares
const { checkAuth } = require('./middleware');

const app = express();
const PORT = 8000;

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

connectMongoDb();

app.set('view engine','ejs');
app.set('views',path.resolve("./views"))

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/',staticRoute);
app.use('/user',authRoute);
app.use('/api/business',checkAuth(),businessRoute);

app.listen(PORT,()=>console.log(`SERVER STARTED AT PORT: ${PORT}`));
