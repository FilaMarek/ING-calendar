var express = require("express");
var app = express();
var db = require("./mysql");
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

var mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "calendar",
    password: "AlscoF.C2011!"
});

app.get("/", function (req, res) {
    res.send("Hello world of node.js");;

});

app.get("/query.json", function (req, res) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM calendar.calendars limit 5", function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result);
        });
    });
});


app.listen(3001);