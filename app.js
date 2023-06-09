const express = require('express');
const morgan = require("morgan");
const app = express() //creates an express app
const { db, Page, User  } = require('./models');

module.exports = app;

app.use(morgan("dev"));
app.use(express.static(__dirname + `/public`)); //allows us to access our public folder
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    console.log('hello world');
  })


db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})

const PORT = 3000;

const init = async () => {
  await db.sync({force: true});
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();