//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

import { useRouter } from 'next/router'
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer,
    Row,
} from "./AddDeliveryAddress.style";
import { TextField, Box, Paper, Button, Typography } from "@mui/material";



function AddDeliveryAddress() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/Details")
    };


    return (
        <>
            <Navbar></Navbar>
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
                                            Add Delivery Address
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            required
                                            name="email"
                                            id="outlined-required"
                                            label="Email"
                                            placeholder="Enter Email"
                                            margin="normal"
                                        />
                                        <TextField
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            name="name"
                                            label="Name"
                                            placeholder="Enter the Name"
                                            margin="normal"
                                        />
                                        <TextField
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            name="location"
                                            label="Location"
                                            placeholder="Enter the Address"
                                            margin="normal"
                                        />

                                        <TextField
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            name="number"
                                            label="Phone Number"
                                            placeholder="Enter Phone Number"
                                            margin="normal"
                                        />
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            name="instructions"
                                            label="Instructions for Delivery"
                                            multiline
                                            rows={4}
                                            placeholder="Enter Descriptions"
                                            margin="normal"
                                        />

                                    </div>
                                    <div>
                                        <Button color="secondary"
                                            onClick={handleSubmit} >
                                            Submit
                                        </Button>
                                    </div>
                                </Box>
                            </Paper>
                        </Row>
                    </MainContent>
                </BottomContainer>
            </PageWrapper>
        </>
    );
}

export default AddDeliveryAddress;
