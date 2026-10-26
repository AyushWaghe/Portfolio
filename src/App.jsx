import React, { useEffect, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { CertificationsSection } from "./components/sections/CertificationsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FinGuruDocs } from "./components/sections/FinGuruDocs";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SavingsSagaDocs } from "./components/sections/SavingsSagaDocs";
import { SkillsSection } from "./components/sections/SkillsSection";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  if (window.location.pathname === "/projects/savings-saga") {
    return <SavingsSagaDocs />;
  }

  if (window.location.pathname === "/projects/fin-guru") {
    return <FinGuruDocs />;
  }

  const [activeCategory, setActiveCategory] = useState("Development Projects");
  const [activeSkill, setActiveSkill] = useState("Languages");
  const [activeExperience, setActiveExperience] = useState("Professional Experience");
  const [activeCertification, setActiveCertification] = useState("Courses & Programs");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useScrollReveal([activeCategory, activeSkill, activeExperience, activeCertification]);

  useEffect(() => {
    const returnToProjects = window.sessionStorage.getItem("portfolioReturnSection") === "projects";
    window.sessionStorage.removeItem("portfolioReturnSection");

    if (returnToProjects || window.location.hash === "#projects") {
      window.requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "instant" });
      });
    }
  }, []);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection activeSkill={activeSkill} onSkillChange={setActiveSkill} />
        <ExperienceSection activeExperience={activeExperience} onExperienceChange={setActiveExperience} />
        <ProjectsSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <CertificationsSection activeCertification={activeCertification} onCertificationChange={setActiveCertification} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
