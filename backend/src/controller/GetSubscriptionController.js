/* Author : Raja Harshini Kasibhotla */

const Subscription = require("../model/Subscriptions");
const url = require("url");
const differenceInDays = require('date-fns/differenceInDays');

exports.getSubscriptionDetails =  async (request, response) => {
  try {
    let subscriptionDetails = await Subscription.find();
    console.log(subscriptionDetails);
    response.json(subscriptionDetails);
  } catch (error) {
    response.json({ message: error.message });
  }
};


exports.getSubscriptionStatus = async (request, response) => {
    try {
    console.log("inside status");
      const emailId = request.query.emailId;
      let userDetails = await Subscription.find({emailId: emailId});
      const diffInDays = differenceInDays(userDetails[0].subscriptionEndDate, new Date());
      console.log(userDetails);
       console.log(userDetails[0].status);
       if(diffInDays < 0){
         response.json({"status" : "expired","message" : "your subscription has ended"})
       }
      response.json({"status" : userDetails[0].status, "daysLeft" : diffInDays});
      console.log("difference in days: " + diffInDays);
    } catch (error) {
      response.json({ message: error.message });
    }
  };


