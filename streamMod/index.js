const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("./data.txt", (err, data) => {
    //     res.end(data)
    // })

    const rstream = fs.createReadStream("./data.txt")

    rstream.on("data", (chunk) => {
        res.write(chunk);
    })

    rstream.on("end", () => {
        res.end();
    })
})

server.listen(8000, '127.0.0.1')