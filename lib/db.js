var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Capstone2023',
  database : 'team_cc'
});
db.connect();

module.exports = db;
