'use strict'

var express = require('express');
var api = express.Router();
var AnimalController = require('../Controllers/animals');

api.post('/save-animal', AnimalController.saveAnimal);
api.get('/list-animal', AnimalController.listAnimal);

module.exports = api;