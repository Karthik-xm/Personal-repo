const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '..', 'Module', 'delete')
const file_to_delete = '1676410030129-screen.webp'

fs.readdir(directory, (error, files) => {
    if (error) throw new Error('Could not read directory');

    files.forEach((file) => {
        const file_path = path.join(directory, file);
        console.log(file_path);

        fs.stat(file_path, (error, stat) => {
            if (error) throw new Error('File do not exist');

            if (stat.isDirectory()) {
                console.log('The file is actually a directory')
            } else {
                fs.unlink(file_path, (error) => {
                    if (error) throw new Error('Could not delete file');
                    console.log(`Deleted ${file_path}`);
                })
            }

        });
    });
});