const fs = require('fs');

console.log('We started the script');

function myLogFunction(arg) {
  console.log(`Argument: ${arg}`);
}

setTimeout(myLogFunction, 1500, 'wow, a timeout');

fs.readFile('./text.txt', 'utf8', function(err, data) {
  if(err){
    throw err;
  }
  console.log(data);
});

console.log('Last line to console ... ?');