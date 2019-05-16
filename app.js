'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
var managers_routes = require('./Routes/managers');
var animals_routes = require('./Routes/animals');

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// uso rutas
app.use('/managers', managers_routes);
app.use('/animals', animals_routes);



module.exports = app;