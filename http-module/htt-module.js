const http = require('http');
const url = require('url');


const aboutMe = {
    name: "Karthik",
    age: 27,
    location: "Trivandrum",
    company: 'Xminds'
};
const bodyStream = [];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome!');
    }
    if (req.url === '/about') {
        res.write(JSON.stringify(aboutMe));
    }
    if (req.url === '/echo') {
        req.on('data', (chunk) => {
            bodyStream.push(chunk);
            const bufferData = Buffer.concat(bodyStream);
            const requestBody = JSON.parse(bufferData);
            res.end(JSON.stringify(requestBody));
        });
    }
});
server.listen('3000');
console.log('listening to port 3000..')