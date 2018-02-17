const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("db connected!");
});

module.exports = mongoose;