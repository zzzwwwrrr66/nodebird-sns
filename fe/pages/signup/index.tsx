import { sign } from "crypto";
import React from "react";
import AppLayOut from "../../components/templates/AppLayOut";
import SignupFrom from "../../components/organisms/SignupForm";
import Head from "next/head";

const Signup = () => {
  return (
    <AppLayOut>
      <Head>
        <title>signup | wooram</title>
      </Head>
      <h2>Sign up</h2>
      <SignupFrom />
    </AppLayOut>
  );
};

export default Signup;
