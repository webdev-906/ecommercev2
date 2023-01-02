// Dependencies 
const express = require('express'); // middleware
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config()


app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE
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

