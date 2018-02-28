const fs = require('fs');

const splitFileToArray = function (filename, cb = () => { }) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, function (err, data) {
      if (err) {
        reject(err);
        return cb(err);
      }

      const contentAsArray = data.toString().split('\n');
      resolve(contentAsArray);
      cb(null, contentAsArray);
    });
  });
};


splitFileToArray('./files/multipleLines.txt')
  .then(lines => {
    console.log('File has got:', lines.length, 'lines, using Promise interface');
  })
  .catch(err => {
    console.error(err);
  });

splitFileToArray('./files/multipleLines.txt', function (err, lines) {
  if (err) {
    throw err;
  }
  console.log('File has got:', lines.length, 'lines, using callback interface');
});