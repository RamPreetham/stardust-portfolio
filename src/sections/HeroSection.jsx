import React from 'react';
import { motion } from 'framer-motion';
import { hero } from '../data/content.js';

function HeroSection() {
  return (
    <section id="hero" className="hero hero--full">
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1>{hero.name}</h1>
        <p className="hero-title">{hero.title}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            {hero.ctaPrimary}
          </a>
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
  );
}

export default HeroSection;
