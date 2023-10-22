console.log("Hello world i'm about to become a great cloud architect!");

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method, url} = request;

    if (url === '/') {
        if (method === 'GET'){
            response.end('This is Home Page.');
        } else {
            response.end(`This is url cannot be accessed with ${method} method.`);
        }
    } else if (url === '/about') {
        if (method === 'GET'){
            response.end('This is About Page.');
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
            body.push(chunk);
            });

            request.on('end', () => {
            body = Buffer.concat(body).toString();

            const {name} = JSON.parse(body);
            response.end(`Hello, ${name}! This is About Page.`);
            });
        } else {
           response.end(`This is url cannot be accessed with ${method} method.`); 
        }
    } else {
        response.end(`This page url is not found.`);
    }
};

const server = http.createServer(requestListener);

const port = 5001;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is currently runniong on http://${host}:${port}/`)
});