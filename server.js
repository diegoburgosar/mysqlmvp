const mysql = require ("mysql");
const express = require ("express");
const bodyParse = require ("body-parser");

 
var app = express();
app.use(bodyParse.json());
 


var mysqlConnection = mysql.createConnection({
        host:"localhost",
        user:"root", 
        password:"PODroot2019",
        database:"early_adopters",
        multipleStatements:true
});

mysqlConnection.connect((err)=> {
    console.log("=============================");
    //console.log("=>>>>>",err );
   
});




app.listen(3000);