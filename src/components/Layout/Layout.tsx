import scss from "./Layout.module.scss";
import React from "react";
import Head from "next/head";
import Login from "../Login";

const Layout = (props: any) => {

  return (
    <>
      <Head>
        <title>PokeSquad - Daily Pokemon Squad Builder</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.layout}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
