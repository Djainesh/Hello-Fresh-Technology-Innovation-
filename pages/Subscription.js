/* Author : Raja Harshini Kasibhotla */

import * as React from "react";
//import "../styles/styles-sub.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MonthlySubscription from "./MonthlySubscription";
import Weeklysubscription from "./WeeklySubscription";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/navbar";
import { useAuth } from '../firebase/AuthUserContext';
import Button from "@mui/material/Button";

function Subscription() {
  const [subscription, setSubscription] = useState({});
  const [state, setState] = useState(1);
  const { authUser, loading, signOutUser } = useAuth();
  useEffect(() => {
    const getSubscriptionDetails = async () => {
     // console.log(authUser.email)
      let subStatus = {};
      console.log("inside get");
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
  const theme = createTheme();

  theme.typography.h4 = {
    fontSize: "1.2rem",
    fontFamily: "sans-serif",
    fontStyle: "italic",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  function deleteSubscription(){
    let subStatus = {};
    console.log("inside delete subscription");
      const result = axios.delete("https://fresh-kit-backend.herokuapp.com/deletesubscription", {
        data: {
          emailId: "user2@gmail.com"
        },
      });
  }
  return (
    <React.Fragment>
                <Navbar></Navbar>
      <div>
        <div className="custom-h3">
          <br />
          {state == 0 ? (
            <div>
              <ThemeProvider theme={theme}>
                <Typography pl={50} pb={10} variant="h4">
                  You do not have any active subscription
                </Typography>
              </ThemeProvider>
              <Weeklysubscription />
              <br />
              <br />
              <MonthlySubscription />
            </div>
          ) : (
            <div>
              <ThemeProvider theme={theme}>
                <Typography pl={50} pb={10} variant="h4">
                  Your subscription expires in {subscription.daysLeft} days
                </Typography>
              </ThemeProvider>
              <div className="custom-div-sub">
                {" "}
                <ThemeProvider theme={theme}>
                  <Typography pl={50} pb={10} variant="h4">
                    Cancel your subscription?  <Button onClick={deleteSubscription}>Click here!</Button>
                  </Typography>
                </ThemeProvider>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Subscription;
