const fs = require('fs');


const splitFileToArray = function (filename, cb) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      return cb(err);
    }

    const contentAsArray = data.toString().split('\n');
    cb(null, contentAsArray);
  })
};


splitFileToArray('./files/multipleLines.txt', function (err, lines) {
  if(err) {
    throw err;
  }
  console.log('File has got:', lines.length, 'lines');
});