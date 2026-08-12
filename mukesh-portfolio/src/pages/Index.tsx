import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SelectedWork from "../components/SelectedWork";
import Explorations from "../components/Explorations";
import Journal from "../components/Journal";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="relative bg-bg">
      {/* Hero is mounted behind the loading screen so the reveal feels seamless. */}
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Explorations />
        <Stats />
        <Skills />
        <Experience />
        <Achievements />
        <Journal />
        <Contact />
      </main>
      <Footer />

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
    </div>
  );
}

export default Index;
