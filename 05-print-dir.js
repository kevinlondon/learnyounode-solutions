var fs = require('fs'),
    path = require('path');


var directory = process.argv[2],
    extension = process.argv[3];


fs.readdir(directory, filterFiles);

function filterFiles(err, filenames) {
    var filename, fileExtension;
    if (err) throw err;

    for (var i = 0; i<filenames.length; i++) {
        filename = filenames[i];
        fileExtension = path.extname(filename);

        if (fileExtension.search(extension) > -1) {
            console.log(filename);
        }
    }
}
