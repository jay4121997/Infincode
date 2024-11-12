import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import WhatWeOffer from "../components/ui/WhatWeOffer";
import Calender from "../components/ui/Calender";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <GradientWrapper>
        <WhatWeOffer />
      </GradientWrapper>

      <Calender />
      {/* <FooterCTA /> */}
      {/* <LogoGrid />
      <GradientWrapper>
        
      </GradientWrapper>
      <CTA />
      <GradientWrapper>
        <Features />
        <Testimonials />
        
      </GradientWrapper> */}
    </>
  );
}
