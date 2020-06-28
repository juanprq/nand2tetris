const fs = require('fs');

const [,, filePath] = process.argv;

const vmCode = fs.readFileSync(filePath, 'utf-8');
console.log(vmCode);
