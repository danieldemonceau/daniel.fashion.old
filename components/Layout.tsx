import Head from "next/head";
import Footer from "./Footer";

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
      <div className="p-6 h-full from-black to-slate-700 bg-gradient-to-br">
        <main className="h-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
