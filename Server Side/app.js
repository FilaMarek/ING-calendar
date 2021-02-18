var express = require("express");
var app = express();
//var db = require("./mysql");
var cors = require('cors')
var bodyParser = require('body-parser')
var mysql = require("mysql");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.use(cors()) // Use this after the variable declaration




var pool = mysql.createPool({
    connectionLimit: 10, // default = 10
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b4546435e0b9bc',
    password: 'aaadbfe5',
    database: 'heroku_5ebefb60c94ae76'
});



app.get("/", function (req, res) {
    res.send("Hello world of node.js + Heroku");;

});

app.get("/query.json", function (req, res) {
    pool.getConnection(function (err, connection) {

        console.log("Connected!");

        connection.query("SELECT NOW();", function (err, result) {
            connection.release();
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result);
        });
    });
});

// current month meetings

app.get("/monthMeetings", function (req, res) {
    pool.getConnection(function (err, connection) {

        console.log("Connected!");


        connection.query("SELECT * FROM heroku_5ebefb60c94ae76.today where date LIKE '2020-12%'", function (err, result) {
            connection.release();
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result);
        });
    });
});






// list of today's meetings


app.get("   ", function (req, res) {
    pool.getConnection(function (err, connection) {

        console.log("Connected!");


        connection.query("SELECT * FROM heroku_5ebefb60c94ae76.today where date = CURDATE()", function (err, result) {
            connection.release();
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result);
        });
    });
});



// insert to DB

app.post('/CurrentMonthMeetings', function (req, res, next) {

    pool.getConnection(function (err, connection) {
        CalendarYear = req.body.year;
        CalendarMonth = req.body.month;
        CalendarDay = req.body.day;

        connection.query("SELECT * FROM heroku_5ebefb60c94ae76.today WHERE date BETWEEN " + CalendarYear + "-" + CalendarMonth + "- 01" + " AND " + CalendarYear + "-" + CalendarMonth + "- 31", function (err, result) {
            if (err) {
                console.log(err)
            }
            console.log(result)
            //res.json(req.body)
            //  })
        })
    })
})



app.post('/meetings', function (req, res, next) {

    pool.getConnection(function (err, connection) {
        var date = req.body.date;
        var meeting = req.body.meetingName;

        var insertSQL = "INSERT INTO today(date, meeting) VALUES(?, ?);"
        connection.query(insertSQL, [date, meeting], function (err, result) {
            if (err) {
                console.log(err)
            }
            console.log(date)
            console.log(meeting)
            res.json(req.body)
            //  })
        })
    })
})



var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("Listening on " + port);
});



/////////////////////////
