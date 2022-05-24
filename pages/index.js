import { useRouter } from 'next/router'
import { useAuth } from '../firebase/AuthUserContext';
import ImageSection from "./ImageSection";
import FoodHomePage from "./FoodHomePage";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const { authUser, loading, signOutUser } = useAuth();
  console.log(authUser);
  const router = useRouter();
  return (
    <>
      <ImageSection />
      <FoodHomePage />
    </>

  );
}
