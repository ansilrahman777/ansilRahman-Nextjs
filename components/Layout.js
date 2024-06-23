import { Sora } from "@next/font/google";
import About from '../pages/about/index'
import Services from '../pages/services/index'
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-primary/60 text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>ANSIL RAHMAN</title>
        <meta property="og:title" content="ANSIL RAHMAN" key="title" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
