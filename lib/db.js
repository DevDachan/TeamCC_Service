var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1q2w3e8255',
  database : 'team_cc'
});
db.connect();

module.exports = db;
