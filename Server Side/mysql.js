var mysql = require("mysql");

const con = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b4546435e0b9bc',
    password: 'aaadbfe5',
    database: 'heroku_5ebefb60c94ae76'

});

/*
var pool = mysql.createPool({
    connectionLimit: 10, // default = 10
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b4546435e0b9bc',
    password: 'aaadbfe5',
    database: 'heroku_5ebefb60c94ae76'
*/

module.exports.QueryDB = () => {
    return "Query from mysql.";
};

module.exports.Get5Dates = new Promise(function (resolve, reject) {
    con.connect(function (err) {
        if (err) reject(err);
        resolve();
    });
});
