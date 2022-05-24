// Author: Jainam Rakeshkumar Shah

const Items = require("../model/Items");

const url = require("url");


// This methods take all the records from database and sent to frontend.
 
const getItems = async (request, response) => {
  try {
    let items = await Items.find();
   // console.log("jaianm");
    response.json(items);
  } catch (error) {
    response.json({ message: error.message });
  }
};

module.exports = getItems;
