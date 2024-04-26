const path = require('path');

const filePath = 'example.txt';

const dirname = path.dirname(filePath);
console.log('Directory name:', dirname);

const filename = path.basename(filePath);
console.log('File name:', filename);

const extension = path.extname(filePath);
console.log('File extension:', extension);

const fullPath = path.join(dirname, filename);
console.log('Full path:', fullPath);
