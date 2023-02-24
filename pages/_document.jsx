import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="text-black bg-white dark:text-white dark:bg-[#111010]"
        translate="no"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
