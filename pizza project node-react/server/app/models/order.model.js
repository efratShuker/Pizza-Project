const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    userName: { type:String, required: true },
    userEmail: { type:String, required: true },
    userAddress: { type:String, required: true },
    totalPrice: { type: Number, min: 0, required: true },
    status: {type:String, enum:["reception", "preperation", "sending", "finished"]},
    orderPizza: {type:Array}
  },
    { timestamps: true })
);

module.exports = Order;
