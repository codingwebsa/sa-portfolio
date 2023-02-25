import { Layout } from "@/components";
import "@/styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Saif A</title>
        <link rel="shortcut icon" href="favicon-sa.png" type="image/x-icon" />
        <meta
          name="og:image:url"
          content="https://saportfolio.vercel.app/og.jpg"
        />
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
