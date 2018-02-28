const server = require('http').createServer();
const fs = require('fs');

server.on('request', (req, res) => {
  // fs.readFile('./large.html', (err, data) => {
  //   if(err) throw err;
  //   res.end(data);
  // });

  const source = fs.createReadStream('./files/large.html');
  source.pipe(res);
})


server.listen(3456, () => {
  console.log('Listening on localhost:3456');
});