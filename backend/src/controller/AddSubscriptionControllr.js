/* Author : Raja Harshini Kasibhotla */
const Subscriptions = require("../model/Subscriptions");
const url = require("url");
const differenceInDays = require("date-fns/differenceInDays");
const { addDays } = require("date-fns");

exports.addSubscriptionDetails = async (req, res, next) => {
  const { emailId, subscriptionType } = req.body;
  Subscriptions.findOneAndRemove({ emailId: emailId }, function (err, docs) {
    if (err) {
      console.log(err);
    }
  });
  const startDate = new Date();
  let endDate = null;
  if (subscriptionType.includes("weekly")) {
    endDate = addDays(startDate, 7);
  } else {
    if (subscriptionType.includes("monthly")) {
      endDate = addDays(startDate, 30);
    }
  }
  const userData = new Subscriptions({
    subscriptionType: subscriptionType,
    emailId: emailId,
    subscriptionStartDate: startDate,
    subscriptionEndDate: endDate,
    status: "active",
  });
  const updatedResult = await userData.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: "successfully added subscription details" });
  });
};
