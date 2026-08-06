const express = require('express');
const dns = require('dns');

const app = express();
const PORT = 8000;

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])


app.listen(PORT,()=>console.log(`SERVER STARTED AT PORT: ${PORT}`));
