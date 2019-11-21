const mysql = require ("mysql");
const express = require ("express");
const bodyParse = require ("body-parser");

var app = express();
app.use(bodyParse.json());
 
var mysqlConnection = mysql.createConnection({
    
        host:"35.222.231.62",
        user:"root", 
        port:"3306", 
        database:"PODroot2019",
        multipleStatements:true
/*
        host:"localhost",
        user:"root", 
        port:"3306",
        password:"PODroot2019",
        database:"early_adopters",
        multipleStatements:true
        */
});

mysqlConnection.connect((err)=> {
    console.log("=============================");
    console.log("=>>>>>",err );
});
app.listen(3000);