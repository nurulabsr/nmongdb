const express = require("express");
const book_connection = require("./mongodb/edudb/book_connection");
const app = express();
app.use(express.json());
const port = 9000;




app.get("/", (req, res)=> {
    res.send("The app is running")
})

app.listen(port, ()=> {
    console.log(`The app is running on port number ${port}, visit http://localhost:${port}`);
})


app.post("/post", async (req, res) => {
    const book_connection_ = await book_connection();
    const data = await book_connection_.insert(req.body);
    res.send(req.body);
})