const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const filePath = 'example.txt';

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.end('File not found');
        } else {
            const fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            fileStream.pipe(res);
            fileStream.on('error', (err) => {
                console.error('Error reading file:', err);
                res.end('Internal Server Error');
            });
        }
    });
});

server.listen(3000);
