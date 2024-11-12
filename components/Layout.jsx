import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Infinicode</title>
        <meta
          name="description"
          content="Transform your digital presence with expert web design, AI solutions, e-commerce, and seamless app development. We build and support tools to help your business grow smoothly and efficiently. Book today at https://cal.com/infinicode"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
