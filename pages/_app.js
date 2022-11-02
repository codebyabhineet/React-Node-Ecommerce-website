import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import Layout from "../components/layouts/main";
import Topbar from "./Topbar";
import Footer from "./Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Topbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>

    </>
  );
}

export default MyApp;
