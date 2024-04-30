const http = require('http');
const fs = require('fs');
const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('addContact', ({ name, email }) => {
    const contactData = `Name: ${name}, Email: ${email}\n`;
    console.log(name, email)

    fs.appendFile('contacts.txt', contactData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Contact added successfully');
        }
    });
});

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/addContact') {
        let requestBody = '';

        req.on('data', (chunk) => {
            requestBody += chunk.toString();
        });

        req.on('end', () => {
            console.log(requestBody)
            const { name, email } = JSON.parse(requestBody);
            eventEmitter.emit('addContact', { name, email });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Contact added successfully' }));
        });
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`listening port:  ${PORT}`);
});
