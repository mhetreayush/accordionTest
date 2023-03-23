import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta
          name="google-site-verification"
          content="LAFLPJO73XDxXz1ZA7Oa8g_g3xdfcL24i9sEhlt9G6o"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
