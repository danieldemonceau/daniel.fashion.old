import Head from "next/head";
import Footer from "./Footer/index";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <link
          href="/fonts/google/catamaran/Catamaran-VariableFont_wght.ttf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
