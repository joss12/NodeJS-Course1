const files = require('./index')

// import send from './request.js';
// import read from './response.js';

function makeRequest(url, data){
    files.request.send(url, data);
    return files.response.read();
}

const responseData = makeRequest('https://www.google.com', 'Hello');

console.log(responseData)
