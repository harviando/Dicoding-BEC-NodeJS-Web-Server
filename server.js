console.log("Hello world i'm about to become a great cloud architect!");

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;

    if (method === 'GET'){
        response.end('This is GET Response');
    }
    if (method === 'POST'){
        response.end('This is POST Response');
    }
    if (method === 'PUT'){
        response.end('This is PUT Response');
    }
    if (method === 'DELETE'){
        response.end('This is DELETE Response');
    }
};

const server = http.createServer(requestListener);

const port = 5001;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is currently runniong on http://${host}:${port}/`)
});