/* Author : Raja Harshini Kasibhotla */

const express = require("express");
const route = express.Router();
var bodyParser = require('body-parser');
route.use(bodyParser.json());

const {getSubscriptionDetails} = require("../controller/GetSubscriptionController");
const {getSubscriptionStatus} = require("../controller/GetSubscriptionController");
const { addSubscriptionDetails } = require("../controller/AddSubscriptionControllr");
const { deleteSubscriptionDetails } = require("../controller/DeleteSubscriptionController");

route.get("/subscriptions", getSubscriptionDetails);
route.get("/subscriptionStatus", getSubscriptionStatus);
route.post("/addSubscription", addSubscriptionDetails);
route.delete("/deletesubscription", deleteSubscriptionDetails)

module.exports = route;
