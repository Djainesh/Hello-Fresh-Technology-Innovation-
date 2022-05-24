//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

import { useRouter } from 'next/router'
import React from "react";
import Navbar from "../components/navbar";

import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer,
    Row,
} from "./AddDeliveryAddress.style";
import { TextField, Box, Paper, Button, Typography } from "@mui/material";


export default function Payment() {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/Confirmation")
    };

    return (
        <PageWrapper>
            <BottomContainer>
                <MainContent>
                    <img src="https://easy-housing-website.s3.amazonaws.com/delivery-man.jpeg" width="100%" height="310px" />
                    <Row>
                        <Paper
                            elevation={3}
                            sx={{
                                width: "60%",
                                marginTop: "auto",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            <Box
                                textAlign="center"
                                component="form"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "70%",
                                    justifyContent: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginTop: "30px",
                                    marginBottom: "50px"
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <Typography>
                                        Payment Method
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        name="Card Number"
                                        id="outlined-required"
                                        label="Card Number"
                                        placeholder="Card Number..."
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        name="Expiration"
                                        label="Expiration"
                                        placeholder="Expiration"
                                        margin="normal"
                                    />

                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        name="CVV"
                                        label="CVV"
                                        placeholder="CVV"
                                        margin="normal"
                                    />

                                </div>
                                <div>
                                    <Button color="secondary" onClick={handleSubmit} >
                                        Pay Now
                                    </Button>
                                </div>
                            </Box>
                        </Paper>
                    </Row>
                </MainContent>
            </BottomContainer>
        </PageWrapper>
    );
}