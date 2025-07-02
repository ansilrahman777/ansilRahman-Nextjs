import "../styles/globals.css";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
    <Head>
        <title>Ansil Rahman | Full Stack Developer Dubai | Web Designer & Hosting Expert</title>
        <meta
          name="description"
          content="Ansil Rahman — Full Stack, Frontend, Backend Developer and Web Designer based in Dubai, UAE. Specialized in Python, Django, React, Next.js and Web Hosting services."
        />
        <meta
          name="keywords"
          content="Ansil Rahman, Full Stack Developer Dubai, Frontend Developer Dubai, Backend Developer Dubai, Web Designer Dubai, Python Django React Developer, Web Hosting Services Dubai, Creative Web Developer UAE"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ansil Rahman | Full Stack Developer Dubai" />
        <meta property="og:description" content="Full Stack Developer & Web Designer offering frontend, backend, and hosting services in Dubai, UAE." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://ansilrahman.in" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
