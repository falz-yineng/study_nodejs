var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
//console.log(buf.toString());
var lines_of_file = buf.toString().split('\n').length
console.log(lines_of_file - 1);