var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  var db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  try {
    var q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
    var arr = [u, p];
  } catch (ex) {
    q =
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
    arr = [];
  }
  return db.query(q, arr);
});
