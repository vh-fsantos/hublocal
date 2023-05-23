import React from "react";
import LoginForm from "../components/LoginForm";
import Head from "next/head";
import Presentation from "../components/Presentation";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
        <Head>
            <title>Hub Local - Login</title>
        </Head>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100dvh'}}>
          <Presentation/>
          <LoginForm />
        </Box>
    </>
  );
};

export default Home;