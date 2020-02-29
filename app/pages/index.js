import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Login from '../components/Login'
import SignIn from './SignIn';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    {/* <Nav /> */}
  
  {/* <Login /> */}
  <SignIn />
</>
)

export default Home
