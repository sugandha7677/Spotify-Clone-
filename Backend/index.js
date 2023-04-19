// npm init 
// npm i express

const express = require("express");
const app = express();
const port = 8000;

// API : GET type : / : return text "Hello world"

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log("App is running on port " + port);
});