const port = 3000;

const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };
app.use("/", express.static(__dirname + '/'));
const server = https.createServer(credentials, app);
server.listen(port, () => { console.log(`server listening on ${port}`) });
