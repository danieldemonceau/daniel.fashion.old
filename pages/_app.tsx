import "../styles/globals.css";
import "../styles/font-catamaran.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config";
import Meta from "../components/Meta";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { asPath } = router; // pick the one that you need
  console.log(asPath);
  return (
    <>
      <NextSeo {...SEO} />
      <Meta />
      <Layout title={pageProps.title} className="h-full">
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
