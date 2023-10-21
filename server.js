console.log("Hello world i'm about to become a great cloud architect!");

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end('<h1>Halo, This is HTTP Server!</h1>');
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is currently runniong on http://${host}:${port}/`)
});