var fs = require('fs');

var filename = process.argv[2];
if (! filename) {
    console.log('No filename provided.');
    return;
}

console.log(countLines(filename));

function countLines(filename) {
    var fileBuffer = fs.readFileSync(filename);
        fileString = fileBuffer.toString();

    return fileString.split('\n').length - 1;
}
