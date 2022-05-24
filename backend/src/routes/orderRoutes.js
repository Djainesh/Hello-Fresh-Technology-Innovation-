// Akshit Jariwala B00866255

// This page is Route file for checkout feature. 

const express = require("express");
const route = express.Router();
var bodyParser = require('body-parser');
route.use(bodyParser.json());

const {getOrders} = require("../controller/checkOutController");
const {saveOrder} = require("../controller/checkOutController");
const {removeOrder} = require("../controller/checkOutController");

route.get("/checkout", getOrders);
route.post("/checkout/addorder", saveOrder);
route.post("/checkout/removeorder", removeOrder);

module.exports = route;
