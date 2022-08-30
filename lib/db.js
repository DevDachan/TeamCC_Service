var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '7894',
  database : 'team_cc'
});
db.connect();

module.exports = db;
