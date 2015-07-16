var express = require('express');
var db = require('../database/postgresql.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var results = [];

  var query = db.client.query("SELECT * FROM events ORDER BY id ASC");

  // Stream results back one row at a time
  query.on('row', function(row) {
    results.push(row);
  });

  query.on('end', function() {
    return res.json(results);
  });
});

module.exports = router;
