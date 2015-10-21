var filter = require('./filterExtensions.js'),
    directory = process.argv[2],
    extension = process.argv[3],
    files;

filter(directory, extension, function(err, filteredFiles) {
    if (err) throw err;

    for (var i=0; i<filteredFiles.length; i++) {
        console.log(filteredFiles[i]);
    }
});
