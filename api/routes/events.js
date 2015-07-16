var express = require('express');
var db = require('../database/postgresql.js');
var router = express.Router();

router.get('/', function(req, res) {
  db.query('SELECT * FROM events ORDER BY id ASC', [], function (err, result) {
    return res.json(result);
  });
});

module.exports = router;
