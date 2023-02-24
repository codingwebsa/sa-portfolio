import { Layout } from "@/components";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const { metadata } = Component;
  return (
    <>
      <Head>
        <title>
          {metadata ? metadata.title : `${Component.name} - Coding SA`}
        </title>
        <link rel="shortcut icon" href="favicon-sa.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
