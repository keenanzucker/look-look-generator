'use strict';

var mongoose = require('mongoose');
var auth = require('./auth');

// TODO Set these environment variables
var env = process.env.NODE_ENV;
var options = {
    autoReconnect: true,
    reconnectTries: 100,
    reconnectInterval: 2000
};

var db;

db = mongoose.connect('mongodb://localhost/looklook');
console.log('Connected to local database');

// let AUTH = auth.uname + ':' + auth.password;
// db = mongoose.connect('mongodb://' + AUTH + '@ds149134.mlab.com:49134/looklook', options);
// console.log('Connected to sandbox instance');

// TODO -> try to get mlab working with my credentials

mongoose.connection.on('error', function(e) {
    console.log('Could not connect to mongoose', e);
});

mongoose.connection.once('open', function(){
    console.log('Mongodb Connection Successful');
});

module.exports = db;
