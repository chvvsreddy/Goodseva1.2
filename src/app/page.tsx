"use client";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import LogisticsForm from "./components/LogisticForm/LogisticsForm";
import Footer from "./components/Footer/Page";

const FooterLp = dynamic(() => import("../app/components/LandingPage/FooterLp"));
const Landingpage2 = dynamic(() => import("../app/components/LandingPage/Lp2"));
const Lp3 = dynamic(() => import("../app/components/LandingPage/Lp3"));
const Lp4 = dynamic(() => import("../app/components/LandingPage/Lp4"));
const Lp5 = dynamic(() => import("../app/components/LandingPage/Lp5"));
const Lp6 = dynamic(() => import("../app/components/LandingPage/Lp6"));

export default function Home() {
  return (
    <div>
      <Header/>
      <LogisticsForm />
      <Landingpage2 />
      <Lp3 />
      <Lp4 />
      <Lp5 />
      <Lp6 />
      <Footer/>
    </div>
  );
}
