var request = require('request');
var http = require('http');
const server = http.createServer((req, res) => {
    console.log('Yay the server is created');
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;
    res.end(`Your IP is ${ip} and port is ${port}`)
}).listen(8080);
