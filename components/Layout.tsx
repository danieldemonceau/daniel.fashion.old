import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title }: any) => {
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
      <div className="h-auto flex flex-col p-6 from-black to-slate-700 bg-gradient-to-br">
        <Navbar />
        <main className="m-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
