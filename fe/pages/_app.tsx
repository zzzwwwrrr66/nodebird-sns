import { AppProps } from "next/app";
import Head from "next/head";
import "antd/dist/antd.css";
import { useEffect } from "react";

if (process.env.NODE_ENV === "development") {
  require("../mocks/index");
}
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>wooram nodeBird</title>
        {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
