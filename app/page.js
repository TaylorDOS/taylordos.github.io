import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
      <Navbar />
      <div className="container pt-32 mx-auto px-8 max-w-6xl">
        <HeroSection />
        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>
        <section id="projects" className="scroll-mt-24">
          <ProjectSection />
        </section>
        <section id="contact" className="scroll-mt-24">
          <EmailSection />
        </section>
      </div>
      <SpeedInsights />
      <Analytics />
      <Footer />
    </main>

  );
}
