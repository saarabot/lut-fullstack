const http = require('http');

// create server object
http
  .createServer((req, res) => {
    // write a response
    res.write('Hehehello');
    res.end();
  })
  .listen(3030, () => console.log('server running on port 3030'));
