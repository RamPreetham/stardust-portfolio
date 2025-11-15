import React from 'react';
import { motion } from 'framer-motion';
import { amexImpact } from '../data/content.js';

function AmexImpactSection() {
  return (
    <section className="section section--amex">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="section-title">{amexImpact.company} Impact</h2>
        <p className="section-subtitle">
          {amexImpact.title} | {amexImpact.period}
        </p>
        <div className="amex-grid">
          {amexImpact.tracks.map((track) => (
            <div key={track.title} className="amex-card">
              <h3>{track.title}</h3>
              <p>{track.body}</p>
              <div className="amex-stat">
                <div className="amex-stat-label">{track.statLabel}</div>
                <div className="amex-stat-value">{track.statValue}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AmexImpactSection;
