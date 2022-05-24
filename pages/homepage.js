import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAuth } from '../firebase/AuthUserContext';
import { useState, useEffect } from 'react'
import Navbar from "../components/navbar";

export default function Home() {
  const { authUser, loading, signOutUser } = useAuth();
  console.log(authUser)
  const router = useRouter()


  // effectively onMount()
  useEffect(() => {

    // redirect users who are not logged in, back to the index page
    if (!authUser)
      router.push("/")
  }, []);

  return (
    <div>
      {authUser && <button type="button" className="btn btn-primary" onClick={() => {
        signOutUser()
        router.push("/")
      }} >Signout </button>}

      <h1>
        {authUser && <div>Signed in as {authUser.firstName + " " + authUser.lastName} </div>}
      </h1>
    </div>

  );

}
