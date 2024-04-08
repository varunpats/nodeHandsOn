const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("Hello world from about")
})

app.listen(8000, () => {
    console.log("Server listening");
})