var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf8', countLines);


function countLines(err, fileString) {
    if (err) throw err;
    var lines = fileString.split('\n').length - 1;
    console.log(lines);
}
