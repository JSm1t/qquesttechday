const fs = require('fs');

const splitFileToArray = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, function (err, data) {
      if (err) {
        reject(err);
      }
      setTimeout(() => {
        const contentAsArray = data.toString().split('\n');
        resolve(contentAsArray);
      }, 2000);
    });
  });
};


// splitFileToArray('./files/multipleLines.txt')
//   .then(lines => {
//     console.log('File has got:', lines.length, 'lines, using Promise interface');
//   })
//   .catch(err => {
//     console.error(err);
//   });

// splitFileToArray('./files/multipleLines.txt', function (err, lines) {
//   if (err) {
//     throw err;
//   }
//   console.log('File has got:', lines.length, 'lines, using callback interface');
// });

function printLinesOfFile() {
  try {
    const lines = splitFileToArray('./files/multipleLines.txt');
    setTimeout(()=> {
      console.log('File has got:', lines.length, 'lines, using async-await');  
    }, 3000);
  } catch (err) {
    console.error(err);
  }
}

printLinesOfFile();