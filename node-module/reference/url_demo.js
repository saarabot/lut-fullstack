const url = require('url');

const murl = new URL('http://webbisivu.io:8080/hello.html?id=21&status=active');

// serialized url
console.log(murl.href);
// or toString()

// host
console.log(murl.host);

//hostname
console.log(murl.hostname);

//path name
console.log(murl.pathname);

// serialized query
console.log(murl.search);
// params
console.log(murl.searchParams);

//add param
murl.searchParams.append('ab', '22');
console.log(murl.searchParams);

// loop through params
murl.searchParams.forEach((value, name) => {
  console.log(`${name}, ${value}`);
});
