import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import Header from "../components/header";
import DownloadApps from "../components/DownloadApps";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <DownloadApps />
    </>
  );
}

export default MyApp;
