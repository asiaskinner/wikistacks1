const express = require('express');
const morgan = require("morgan");
const app = express() //creates an express app

module.exports = app;

app.use(morgan("dev"));
app.use(express.static(__dirname + `/public`)); //allows us to access our public folder
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    console.log('hello world');
  })

