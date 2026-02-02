import Hero from "./pages/Hero";
import AboutSection from "./components/AboutSection";
import PracticeSection from "./components/PracticeSection";
import OurTeamSection from "./components/OurTeamSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticeSection />
      {/** 
        <CalculatorSection />
      */}
      <OurTeamSection />
      <FAQSection />
    </>
  );
}
