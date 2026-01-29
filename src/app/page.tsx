import Hero from "./pages/Hero";
import styles from "./page.module.css";
import AboutSection from "./components/AboutSection";
import CalculatorSection from "./components/CalculatorSection";
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
