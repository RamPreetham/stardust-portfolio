import React from 'react';
import { motion } from 'framer-motion';
import { accentureImpact } from '../data/content.js';

function AccentureSection() {
  return (
    <>
      <section className="section section--accenture">
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h2 className="section-title">{accentureImpact.company} Excellence</h2>
          <p className="section-subtitle">
            {accentureImpact.title} | {accentureImpact.period}
          </p>
          <div className="accenture-grid">
            {accentureImpact.cards.map((card, idx) => (
              <div key={card.title} className="accenture-card">
                <div className="accenture-pill">{idx + 1}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section section--delivery">
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h2 className="section-title">Accenture: Delivery Excellence</h2>
          <div className="delivery-grid">
            {accentureImpact.delivery.map((d) => (
              <div key={d.title} className="delivery-card">
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default AccentureSection;
