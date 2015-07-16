var pg              = require('pg'),
  connectionString  = 'postgres://localhost:5432/newfront';

var client = new pg.Client(connectionString);
client.connect();

exports.client = client;
