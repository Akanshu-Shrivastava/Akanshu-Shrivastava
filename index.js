const express = require("express");
// const mongoose = require("mongoose");
require('dotenv').config()
const app = express();
app.use(express.json());

app.post('/product', (req, res) => {
    res.sendStatus(400);
});

console.log(process.env)

app.listen(process.env.PORT || 3000,()=>{
    console.log("server started")
})



