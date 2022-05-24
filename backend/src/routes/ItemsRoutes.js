// Author: Jainam Rakeshkumar Shah

// Routes for the getItems.

const express = require("express");
const route = express.Router();

const getItems = require("../controller/ItemController");

route.get("/items", getItems);

module.exports = route;
