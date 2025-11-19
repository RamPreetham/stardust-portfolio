import React from 'react';
import HeroSection from './sections/HeroSection.jsx';
import SummarySection from './sections/SummarySection.jsx';
import TechSection from './sections/TechSection.jsx';
import CurrentRoleSection from './sections/CurrentRoleSection.jsx';
import AmexImpactSection from './sections/AmexImpactSection.jsx';
import EranovaSection from './sections/EranovaSection.jsx';
import AccentureSection from './sections/AccentureSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import ContactSection from './sections/ContactSection.jsx';

function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="top-nav-inner">
          <button onClick={() => scrollToSection('hero')} className="brand">
            <span className="brand-mark">PT</span>
            <span className="brand-text">Preetham Tammana</span>
          </button>
          <nav className="top-nav-links">
            <button onClick={() => scrollToSection('summary')} className="nav-link">
                Summary
            </button>
            <button onClick={() => scrollToSection('tech')} className="nav-link">
                Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">
                Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="nav-link">
                Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <HeroSection />
        <SummarySection />
        <TechSection />
        <CurrentRoleSection />
        <AmexImpactSection />
        <EranovaSection />
        <AccentureSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  // Remove hash from URL without page reload
  window.history.replaceState(null, "", window.location.pathname);
};


export default App;
