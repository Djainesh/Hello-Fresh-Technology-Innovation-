/* Author : Raja Harshini Kasibhotla */

import * as React from "react";
//import "../styles/styles-sub.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Navbar from "../components/navbar";


function Weeklysubscription() {
  const [subscription, setSubscription] = useState({});
  const [state, setState] = useState(1);
  useEffect(() => {
    const getSubscriptionDetails = async () => {
      let subStatus = {};
      const result = await axios("https://fresh-kit-backend.herokuapp.com/subscriptionStatus", {
        params: {
          emailId: "user2@gmail.com",
        },
      });
      console.log(result);
      if (result.data.message) {
        setState(0);
      } else {
        console.log(result.data);
        subStatus["daysLeft"] = result.data.daysLeft;
        subStatus["subscriptionStatus"] = result.data.status;
        setSubscription({
          ...subscription,
          ...subStatus,
        });
      }
    };
    getSubscriptionDetails();
  }, []);

  return (
    <React.Fragment>
      <div>
      <Typography pl={60} variant="h6" component="h6" >
          Pay $10 per week and get orders with 0 delivery fee
        </Typography>
        <div style={{ paddingLeft: 680, paddingTop: 40 }}>
        <Button style={{backgroundColor: "#f57f36", color: "black", width:100}}>$10/week</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Weeklysubscription;
