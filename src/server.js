// Dependencies 
const express = require('express'); // middleware
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config()


app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3001;

// create database connection with aws rds 
const db = mysql.createPool({
  host: "demo-two.cnxekjsu1pns.us-east-1.rds.amazonaws.com",
  user: "admin", 
  password: "rdsheyyou", 
  database: "eccommerce",
  port: process.env.DB_PORT,
  waitForConnections: true, 
  connectionLimit: 10, 
  multipleStatements: true
})

// res - what the user will see in the front-end
// res - get information from the front-end

// Get everything from mysql server and listen on port 3001
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err){
      console.log(err)
    }
  res.send(result)  
  });
});



app.listen(port, () => {
  console.log('We are up and running!');
})

