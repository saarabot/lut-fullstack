const fs = require('fs');
const path = require('path');

// default async - takes in a callback

// create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, (error) => {
//  if (error) throw error;
//  console.log('folder created');
//});

// create & write to file
//fs.writeFile(
//  path.join(__dirname, '/test', 'hello.txt'),
//  'Hello txt - file',
//  (error) => {
//    if (error) throw error;
//    console.log('created and written to');
//    // file append
//    fs.appendFile(
//      path.join(__dirname, '/test', 'hello.txt'),
//      'I love nodejs?',
//      (error) => {
//        if (error) throw error;
//        console.log('created and written to');
//      }
//    );
//  }
//);

// read file
//fs.readFile(
//  path.join(__dirname, '/test', 'hello.txt'),
//  'utf8',
//  (error, data) => {
//    if (error) throw error;
//    console.log(data);
//  }
//);

//rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'bye.txt'),
  (error) => {
    if (error) throw error;
    console.log('rename done');
  }
);
