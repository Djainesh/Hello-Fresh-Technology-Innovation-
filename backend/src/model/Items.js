// Author: Jainam Rakeshkumar Shah

// This file create database schema for mongodb.

const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const karts = new Schema({
  //_id: String,
  name: String,
  description: String,
  ingredients: String,
  method: String,
  imageUrl: String,
  youtubelink: String,
});

module.exports = new model("kart", karts);
