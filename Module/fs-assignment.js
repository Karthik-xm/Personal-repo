const fs = require('fs');

const filename = 'new-file.txt';
const initialContent = 'This is some content in the file.';

fs.writeFile(filename, initialContent, () => {
    console.log(`File '${filename}' created and content written successfully.`);

    fs.readFile(filename, 'utf8', (data) => {
        console.log(`File content:\n${data}`);

        const additionalContent = '\nThis is some additional content.';
        fs.appendFile(filename, additionalContent, () => {
            console.log('Additional content appended to the file.');

            fs.unlink(filename, () => {
                console.log(`File '${filename}' deleted successfully.`);
            });
        });
    });
});
