var fs = require('fs');

dir = process.argv[2];
filter = process.argv[3];

var suffix = '.' + filter;
pattern = new RegExp(suffix + '$');

fs.readdir(dir, function callback(err, list) {
  if (err) {
    throw err;
  }
  for (let v of list) {
  	if (v.match(pattern)) {
  	  console.log(v);
  	}
  }
})