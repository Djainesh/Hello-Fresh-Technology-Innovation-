const express = require("express");
const Orders = require("./src/model/orders");
const OrderRoutes = require("./src/routes/orderRoutes");
const ItemsRoutes = require("./src/routes/ItemsRoutes");
const SubscriptionRoutes = require("./src/routes/SubscriptionRoutes");
const PaymentRoutes = require("./src/routes/PaymentRoutes");
const app = express();
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
require("../backend/src/mongo/mongo.connection");

app.use(OrderRoutes);
app.use(ItemsRoutes);
app.use(SubscriptionRoutes);
app.use(PaymentRoutes);


app.use("/", (req, res) => {
  res.send("it works");
});

module.exports = app;
