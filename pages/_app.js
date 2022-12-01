import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/header";
import DownloadApps from "../components/DownloadApps";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <DownloadApps />
    </>
  );
}

export default MyApp;
