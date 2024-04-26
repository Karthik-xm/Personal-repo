const fs = require('fs');

const filename = 'new-file.txt';
const initialContent = 'This is some content in the file.';

fs.writeFile(filename, initialContent, () => {
    console.log(`File '${filename}' created and content written successfully.`);
});
const additionalContent = '\nThis is some additional content.';
fs.appendFile(filename, additionalContent, () => {
    console.log('Additional content appended to the file.');
});
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

fs.unlink(filename, () => {
    console.log(`File '${filename}' deleted successfully.`);
});