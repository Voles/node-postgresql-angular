var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json([{
      name: 'event 1'
    }, {
      name: 'event 2'
    }]);
});

module.exports = router;
