import Head from "next/head";
import React from "react";
import AuthButtons from "./AuthButtons";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container md:w-[90%] md:m-[auto]">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Phimmoi</title>
      </Head>

      <div className="grid md:grid-cols-5">
        <Navbar />
        <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
          <AuthButtons />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
