'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManagerSchema = Schema({
    name: String,
    charge: String,
    phone: String,
    animal: [{type: Schema.ObjectId,
        ref:'animals'}],

});

module.exports = mongoose.model('Managers', ManagerSchema);
