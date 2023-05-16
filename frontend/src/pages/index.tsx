import React from "react";
import LoginForm from "../components/LoginForm";
import Head from "next/head";
import Presentation from "../components/Presentation";
import MyComponent from "../components/MyComponent";

const Home = () => {
  return (
    <>
        <Head>
            <title>Hub Local - Login</title>
        </Head>
        <Presentation/>
        <LoginForm />
        <MyComponent />
    </>
  );
};

export default Home;