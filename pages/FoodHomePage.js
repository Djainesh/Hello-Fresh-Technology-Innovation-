//Author: Purvilkumar Sanjaysinh Bharthania (B00901605)

import * as React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useAuth } from '../firebase/AuthUserContext';
import { useRouter } from 'next/router'

export default function FoodHomePage() {
    const { authUser, loading, signOutUser } = useAuth();
    const router = useRouter()

    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" marked="center" align="center" component="h2">
                Featured Food Advertisements
            </Typography>
        </Container>
    );
}