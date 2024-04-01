const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("Hello world from about")
})

app.listen(8000, () => {
    console.log("Server listening");
})