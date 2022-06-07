import React from 'react'
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import ChiefsSection from "../components/ChiefsSection";
import QuoteSection from "../components/QuoteSection";

const Home = () => {
  return (
    <div>
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChiefsSection />
    </div>
  )
}

export default Home