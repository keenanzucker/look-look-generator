'use strict';

let mongoose = require('mongoose');
require('dotenv').config();

const auth = {
  uname: process.env.USERNAME,
  password: process.env.PASSWORD
}

// TODO Set these environment variables
const env = process.env.NODE_ENV;
let options = {
  autoReconnect: true,
  reconnectTries: 100,
  reconnectInterval: 2000
};

let db;

// If local mongo database wanted:
// db = mongoose.connect('mongodb://localhost/looklook');
// console.log('Connected to local database');

// If mlab sandbox wanted:
switch(env) {
  case "PROD":
    db = mongoose.connect(`mongodb://${auth.uname}:${auth.password}@ds149134.mlab.com:49134/looklook`, options);
    console.log('Connected to sandbox PROD instance');
    break;
  case "TEST":
    db = mongoose.connect(`mongodb://${auth.uname}:${auth.password}@ds241039.mlab.com:41039/looklook-test`, options);
    console.log('Connected to sandbox TEST instance');
    break;
  default:
    db = mongoose.connect(`mongodb://${auth.uname}:${auth.password}@ds139446.mlab.com:39446/looklook-dev`, options);
    console.log('Connected to sandbox DEV instance');
    break;
}

mongoose.connection.on('error', function(e) {
  console.log('Could not connect to mongoose', e);
});

mongoose.connection.once('open', function(){
  console.log('Mongodb Connection Successful');
});

module.exports = db;
