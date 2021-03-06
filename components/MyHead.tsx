import { FC } from "react";
import Head from "next/head";

const MyHead: FC = () => {
  return (
    <>
      <Head>
        <title>ÀI - Demystify attraction with Artificial Intelligence</title>
        <meta
          name="description"
          content="ÀI - Demystify attraction with Artifical Intelligence"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:title"
          content="ÀI - Demystify attraction with Artificial Intelligence"
        />
        <meta
          property="og:site_name"
          content="ÀI - Demystify attraction with Artificial Intelligence"
        />
        <meta
          property="og:description"
          content="ÀI - Demystify attraction with Artificial Intelligence"
        />
        <meta property="og:image" content="/icons/white-gradbg.png" />
      </Head>
    </>
  );
};
export default MyHead;
