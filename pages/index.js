import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AboutUs from "../components/Home/AboutUs";
import Stocks from "../components/Home/Stocks";

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Meredith Finance</title>
        </Head>
        <AboutUs />
        <Stocks />
      </Layout>
  );
}
