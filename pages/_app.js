import Script from "next/script";
import "../styles/globals.css";
import Header from "../components/header";
import DownloadApps from "../components/DownloadApps";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Header />
      <div className="container mx-auto flex flex-col px-5  justify-center items-center ">
        <Component {...pageProps} />
      </div>
      <Footer />
      <DownloadApps />
    </>
  );
}

export default MyApp;
