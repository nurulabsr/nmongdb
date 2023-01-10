const express = require("express");
const _book_connection = require("./mongodb/edudb/book_connection");
const _fish_connection_ = require("./mongodb/shopdb/fish_connection");
const _food_connection = require("./mongodb/shopdb/food_connection");
const laptop_connection_ = require("./mongodb/shopdb/laptop_connection");
const app = express();
app.use(express.json());
const port = 9000;




app.get("/", (req, res)=> {
    res.send("The app is running");
})

app.listen(port, ()=> {
    console.log(`The app is running on port number ${port}, visit http://localhost:${port}`);
})

// **************************************************** post section **************************************************************
app.post("/post", async (req, res) => {
    const book_connection_ = await _book_connection();
    const data = await book_connection_.insert(req.body);
    res.send(data);
})
app.post("/food_data", async(req, res)=> {
    const foo = await _food_connection();
    const data = await foo.insert(req.body);
    res.send(data);
    // console.log(req.body);
    
})

app.post("/laptop_data", async(req, res) => {
    const laptop_connection = await laptop_connection_();
    const data =laptop_connection.insert(req.body);
    res.send(data);
 
})

app.post("/fish_data", async(req, res)=> {
    const _fish_connection = await _fish_connection_();
    const data = _fish_connection.insert(req.body);
    res.send(data);
})

