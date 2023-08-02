// Create web server

// 1. Load http module
var http = require('http');
var fs = require('fs');

// 2. Create http server
var server = http.createServer(function(request, response) {
    // 3. Send HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // 4. Send response body
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

// 5. Bind port 8081
server.listen(8081);

// 6. Console log
console.log('Server is running at http://