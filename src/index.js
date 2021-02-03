const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = `
<html>
    <head>
        <title>First Node Page</title>
    </head>
    <body>
        <h1>First Node Page!!!!!</h1>
    </body>
</html>
`;

const onRequest = (request, response) => {
    console.log(request.url);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(index);
    response.end();
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.01: ${port}`);