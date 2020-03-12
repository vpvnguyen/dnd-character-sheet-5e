import React from "react";
import Head from "next/head";
import CharHeader from "../components/CharSheet/CharHeader";

const Sheet = () => (
  <>
    <Head>
      <title>Sheet</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>

    <CharHeader />
  </>
);

export default Sheet;
