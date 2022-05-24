// Akshit Jariwala B00866255

// This page is a controller for handelling checkout orders.

const Orders = require("../model/orders");

exports.getOrders = async (request, response) => {
  try {
    let orders = await Orders.find();
    response.status(200).send(orders);
  } catch (error) {
    response.json({ message: error.message });
  }
};

exports.saveOrder = async (request, response) => {
  try {
    let order = request.body;
    let userID = order.userid;
    let dishID = order.dishid;
    let dishName = order.dishname;
    let dishIngridients = order.ingridients;
    let dishPrice = order.price;
    
    let newOrders = {
      userid:userID,
      dishid:dishID,
      ordercomplete:true,
      dishname:dishName,
      ingridients:dishIngridients,
      price:dishPrice
    }

    let newOrder = new Orders(newOrders);   
  
    let orders = await newOrder.save((err) => {
      if (err) return response.json({ success: false, error: err });
      return response.status(200).json({ success: "successfully added subscription details" });
    });
  } catch (error) {
    console.log(error);
  }
};

// remove order from cart
exports.removeOrder = async (request, response) => {
  try {
    orderID = request.body.orderid;
    let data = await Orders.deleteOne({ _id: orderID });
    response.status(200).send(data);
  } catch (error) {
    responsejson({ message: error.message }).status(400);
  }
};