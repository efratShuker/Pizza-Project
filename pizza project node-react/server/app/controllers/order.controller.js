const db = require("../models");
const Order = db.order;

const second = 1000;
const minute = 60 * second;

//update the status of the order
const updateStatus = (time, data, newStatus) => {
    const newDetails = {
        totalPrice: data.totalPrice,
        additions: data.additions,
        status: newStatus
    }
    setTimeout(() => {
        Order.findByIdAndUpdate(data._id, newDetails, { new: true })
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }, time);
}


// Create and Save a new entry
exports.create = (req, res) => {
    // Validate request
    if (!(req.body.totalPrice && req.body.userName && req.body.userEmail && req.body.userAddress)) {
        return res.status(400).send({
            message: "Order userId or total price can not be empty!"
        });
    }

    // Create a entry
    const order = new Order({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userAddress: req.body.userAddress,
        totalPrice: req.body.totalPrice,
        orderPizza: req.body.orderPizza,
        status: "reception"
    });

    // Save entry in the database
    order.save()
        .then(data => {
            res.send(data);
            updateStatus(2 * minute, data, "preperation");
            updateStatus(17 * minute, data, "sending");
            updateStatus(42 * minute, data, "finished");
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the order."
            });
        });
};

