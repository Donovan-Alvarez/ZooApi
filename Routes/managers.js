'use strict'

var express = require('express');
var ManagerController = require('../Controllers/managers');
var api = express.Router();

api.post('/save-manager', ManagerController.ManagerSave);
api.get('/list-manager', ManagerController.listManager);
api.get('/buscar-manager/:busqueda', ManagerController.listManager);



module.exports = api;