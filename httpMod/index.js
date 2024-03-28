const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Hello World!");
    } else if (req.url == '/about') {
        res.end("About");
    } else if (req.url == '/contact') {
        res.end("Contact!");
    } else {
        res.writeHead('404');
        res.end("Page not found!");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Server listening")
})