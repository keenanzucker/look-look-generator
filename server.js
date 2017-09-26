'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.NODE_PORT || 8080;

let cardRouter = require('./routes/card');
// TODO -> rename card i guess
let publicRouter = require('./routes/public');

let app = express();
let db;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.use('/api/v1/card', cardRouter);
app.use('/public', publicRouter);

let server = app.listen(port, function() {
    console.log('Listening on port:', port);
    db = require('./db.js');
});

function cleanup() {
    console.log('Disconnecting from MongoDB');
    db.disconnect();
    process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
