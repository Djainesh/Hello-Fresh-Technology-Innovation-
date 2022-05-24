//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

import { useRouter } from 'next/router'
import React from 'react'
import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer,
    Row,
    Column
} from "./Details.style";
import { Box, Typography, Button } from "@mui/material";
import { Paper } from "@mui/material";
import Navbar from "../components/navbar";

export default function Confirmation() {

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/Products")
    };

    return (
        <>
            <Navbar />
            <PageWrapper>

                <BottomContainer>
                    <MainContent>
                        <img src="https://easy-housing-website.s3.amazonaws.com/delivery-man.jpeg" width="100%" height="310px" />
                    </MainContent>

                    <Paper elevation={3}
                        sx={{
                            width: "50%",
                            marginTop: "auto",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} >
                        <Box textAlign="left"

                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "90%",
                                justifyContent: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "50px",
                                marginBottom: "50px"
                            }}>
                            <Box>
                                <Box textAlign="center" sx={{
                                    marginBottom: "50px",
                                    marginTop: "30px"
                                }}>
                                    <Typography>
                                        Order Confirmation
                                    </Typography>
                                    <Typography>
                                        Payment Successful
                                    </Typography>
                                </Box>
                                <Row>
                                    <Column>
                                        <strong> Order ID: </strong>
                                    </Column>
                                    <Column>
                                        1234
                                    </Column>
                                </Row> <hr />
                                <Row>
                                    <Column>
                                        <strong> Delivery Address: </strong>
                                    </Column>
                                    <Column>
                                        1333 South Park Street, Halifax, Nova Scotia.
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <strong> Instructions for Delivery: </strong>
                                    </Column>
                                    <Column>
                                        Leave At Door Step.
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <strong> Estimate Delivery Time: </strong>
                                    </Column>
                                    <Column>
                                        60 Minutes
                                    </Column>
                                </Row> <hr />
                                <Row>
                                    <Column>
                                        <strong> Your Orders: </strong>
                                    </Column>
                                    <Column>
                                        1. Paneer Butter Masala
                                        2. Butter Chicken
                                    </Column>
                                </Row> <hr />
                            </Box>
                            <Box textAlign="center" sx={{
                                marginBottom: "50px",
                                marginTop: "30px"
                            }}>
                                <Button color="secondary" onClick={handleSubmit} >
                                    Back
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </BottomContainer>

            </PageWrapper>
        </>
    )
}
