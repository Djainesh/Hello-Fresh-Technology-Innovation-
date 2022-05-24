//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useRouter } from 'next/router';
import Navbar from "../components/navbar";

function Payment({ items, total, disabled, cartOuterId }) {
    total = total * 100;
    const router = useRouter();
    const makePayment = async (token) => {
        //console.log(token)
        try {
            const body = {
                token,
                items,
                total,
            };
            const response = await axios.post("https://fresh-kit-backend.herokuapp.com/make", body, {
                // headers: {
                //     Authorization: `Bearer ${authToken}`,
                // },
            });

            router.push("/Confirmation")
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <React.Fragment>
            <StripeCheckout
                stripeKey="pk_test_51KlbyuLgYQ53RYMRdNua3PWPKUdfJqoBuNe5OpPCNKsz87RbGMF1KetEJ0pzBj8vnhpXaOaCJPFx2a61c3mTsioU00efWB6ef5"
                token={makePayment}
                name="My Home"
                amount={total}
            >
                <Button variant="contained" disabled={disabled}>
                    Pay Now
                </Button>
            </StripeCheckout>
        </React.Fragment>
    );
}

export default Payment;
