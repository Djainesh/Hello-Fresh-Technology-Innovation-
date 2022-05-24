//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

import * as React from "react";
import { useRouter } from 'next/router'
import { Button, Typography, Box } from "@mui/material";
import ImageSectionLayout from "./ImageSectionLayout";
import { useNavigate } from "react-router";
import { useAuth } from '../firebase/AuthUserContext';


export default function ProductHero() {
    const router = useRouter();
    const { authUser, loading, signOutUser } = useAuth();
    return (
        <ImageSectionLayout
            sxBackground={{
                backgroundImage: 'url(https://easy-housing-website.s3.amazonaws.com/LoginPage.png)',
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center"
            }}
        >
            <img
                style={{ display: "none" }}
                src='url(https://easy-housing-website.s3.amazonaws.com/LoginPage.png)'
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                ORDER, COOK, EAT, ENJOY !!
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, mr: 2 }}
                    onClick={() => { router.push('/user-auth/login') }}
                >
                    Login
                </Button>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, mr: 2 }}
                    onClick={() => { router.push('/user-auth/register') }}
                >
                    Register
                </Button>
                {authUser && <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => { signOutUser() }}
                >
                    Sign Out
                </Button>}

            </Box>
            <Typography>{authUser && <div>Signed in as {authUser.firstName + " " + authUser.lastName} </div>}</Typography>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                onClick={() => { router.push('/Products') }}
                //onClick={(event) => navigate(ROUTES.FOOD_LISTING)}
                sx={{ minWidth: 200, mt: 5 }}
            >
                View All Food Postings
            </Button>
        </ImageSectionLayout>
    );
}