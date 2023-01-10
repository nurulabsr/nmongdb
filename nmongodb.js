const express = require("express");
const app = express();
const port = 9000;
// const  privateKey = require("./mongodbPrivateKey");
console.log(privateKey.projects.db_book);

app.get("/", (req, res)=> {
    res.send("The app is running")
})









app.listen(port, (req, res)=> {
    console.log(`The app is running on port number ${port}, visit http://localhost:${port}`);
})
