const express = require("express");
const app = express();
const sendMail = require('./sendMail');

app.get("/", (req, res) => {
    res.send("I am a server");
})

app.get("/mail", sendMail)

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})