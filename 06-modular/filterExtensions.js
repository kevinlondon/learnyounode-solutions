var path = require('path'),
    fs = require('fs');

function filterFiles(directory, extension, callback) {
    var filename, fileExtension;

    fs.readdir(directory, function(err, filenames) {
        var files = [];
        if (err) {
            return callback(err, null);
        }

        for (var i = 0; i<filenames.length; i++) {
            filename = filenames[i];
            fileExtension = path.extname(filename);
            if (fileExtension.search(extension) > -1) {
                files.push(filename);
            }
        }
        callback(null, files);
    });
}

module.exports = filterFiles;
