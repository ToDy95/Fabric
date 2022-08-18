const express = require('express');
const cors = require('cors');
const dbConn = require("./database");


const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.writeHead(200);

    res.end();
});

const Routes = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
      origin:"http://localhost:5000/",
      methods:"GET, POST,PUT,DELETE",
      credentials:true  
    })
  )
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    
    next();
    });

app.use("/routes",Routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});