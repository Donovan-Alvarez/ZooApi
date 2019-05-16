'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = Schema({
    name: String,
    type: String,
    age: Number,
    scientificname: String,
});

module.exports = mongoose.model('Animals', AnimalSchema);