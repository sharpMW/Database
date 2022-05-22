const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
require("./db");
require("./models/book");
const port = process.env.PORT || 3000;
const bookRouter = require("./routers/book");
app.use("/book", bookRouter);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


