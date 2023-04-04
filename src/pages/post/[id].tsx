import React from "react";
import { type NextPage } from "next";
import Head from "next/head";

const SinglePostPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex justify-center h-screen">
        <div className="w-full h-full md:max-w-2xl border-x border-slate-400">
          Single Post Page
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
