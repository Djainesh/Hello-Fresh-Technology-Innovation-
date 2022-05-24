// Akshit Jariwala B00866255

// This is the model for orders.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    userid: {
        type: String,
        required: true
    },
    dishid:{
        type: String,
        required: true
    },
    ordercomplete:{
        type:Boolean,
        required : true
    },
    dishname:{
        type: String,
        required: true
    },
    ingridients:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;
