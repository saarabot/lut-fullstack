const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  /*
  if (req.url === '/') {
    // index
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }
  if (req.url === '/about') {
    // index
    fs.readFile(
      path.join(__dirname, 'public', 'about.html'),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }
  if (req.url === '/api/users') {
    const users = [
      {
        name: 'bobi',
        age: 32,
      },
      {
        name: 'kern',
        age: 45,
      },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
    
  } */
  // build filepath
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );
  console.log(filePath);
  let extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javacript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  console.log(extname, contentType);
  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (error, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // some server error
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`Server error: ${err.code}`, 'utf');
      }
    } else {
      // success!
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
