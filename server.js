'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen('8080', function () {
    console.log('App is listening on port 8080');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
