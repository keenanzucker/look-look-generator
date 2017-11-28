'use strict';

let mongoose = require('mongoose');
let auth = require('./auth');

// TODO Set these environment variables
let env = process.env.NODE_ENV;
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
let AUTH = auth.uname + ':' + auth.password;
db = mongoose.connect('mongodb://' + AUTH + '@ds149134.mlab.com:49134/looklook', options);
console.log('Connected to sandbox instance');

mongoose.connection.on('error', function(e) {
    console.log('Could not connect to mongoose', e);
});

mongoose.connection.once('open', function(){
    console.log('Mongodb Connection Successful');
});

module.exports = db;
