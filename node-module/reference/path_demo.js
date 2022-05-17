const path = require('path');

// base filename
console.log(path.basename(__filename));

// dir name
console.log(path.dirname(__filename));

// get extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// Concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'));
