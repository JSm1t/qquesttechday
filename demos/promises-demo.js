const fs = require('fs');

const splitFileToArray = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, function (err, data) {
      if(err) {
        return reject(err);
      }
  
      const contentAsArray = data.toString().split('\n');
      resolve(contentAsArray);
    });
  });
};


splitFileToArray('./files/multipleLines.txt')
  .then(lines => {
    console.log('File has got:', lines.length, 'lines');
  })
  .catch(err => {
    console.error(err);
  });