/* Author : Raja Harshini Kasibhotla */

const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const Subscriptions = new Schema({
 emailId: String,
 subscriptionType: String,
 subscriptionStartDate: Date,
 subscriptionEndDate: Date,
 status: String
});

module.exports = new model("subscriptions", Subscriptions);
