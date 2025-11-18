import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hero } from '../data/content.js';
import heroServers from "../../images/hero-servers.png";
import ContactModal from "../components/ContactModal"; 

function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section id="hero" className="hero hero--full">
        {/* Background */}
        <div
          className="hero-bg-image hero-bg-image--animated"
          style={{ backgroundImage: `url(${heroServers})` }}
        />

        <div className="hero-overlay" />

        {/* Foreground Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1>{hero.name}</h1>
          <p className="hero-title">{hero.title}</p>

          <div className="hero-actions">
            {/* This opens the modal */}
            <button
              className="btn primary"
              onClick={() => setShowForm(true)}
            >
              {hero.ctaPrimary}
            </button>

            <a
              href="https://www.linkedin.com/in/preetham-tammana"
              target="_blank"
              rel="noreferrer"
              className="btn ghost"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Modal, shown when showForm is true */}
      <ContactModal open={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}

export default HeroSection;
