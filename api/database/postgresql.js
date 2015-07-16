var pg              = require('pg'),
  connectionString  = 'postgres://localhost:5432/newfront';

// via http://stackoverflow.com/a/19282657/363448
module.exports = {
  query: function (text, values, cb) {
    pg.connect(connectionString, function (err, client, done) {
      client.query(text, values, function (err, result) {
        done();
        cb(err, result);
      })
    });
  }
};
