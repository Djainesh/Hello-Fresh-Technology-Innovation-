/* Author : Raja Harshini Kasibhotla */

const Subscriptions = require("../model/Subscriptions");
const url = require("url");

exports.deleteSubscriptionDetails = async (req, res, next) => {
  console.log("inside delete")
  console.log(req.body.emailId)
Subscriptions.deleteOne({ emailId: req.body.emailId}, function (err, docs) {
    if (err) {
      console.log(err);

      res.send("error");
    }
    else{
        res.status(200).send("Subscription cancelled successfully");
    }
  });
};
