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
          <a href="#hero" className="brand">
            <span className="brand-mark">PT</span>
            <span className="brand-text">Preetham Tammana</span>
          </a>
          <nav className="top-nav-links">
            <a href="#summary" className="nav-link">
              Summary
            </a>
            <a href="#tech" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#education" className="nav-link">
              Education
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
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

export default App;
