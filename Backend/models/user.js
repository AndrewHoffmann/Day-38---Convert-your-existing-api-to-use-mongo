"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
//  id: Number,     don't need id
 name: {
     required: [true, "Please provide name"],
     type: String,
 },

 age: {
     required: [true, "Please provide age"],
     type: Number,
 },

 likeJS: {
     required: true,
     type: String,
 }

});

module.exports = mongoose.model('user', userSchema);