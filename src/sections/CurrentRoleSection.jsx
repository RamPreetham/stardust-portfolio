import React from 'react';
import { motion } from 'framer-motion';
import { currentRole } from '../data/content.js';

function CurrentRoleSection() {
  return (
    <section id="experience" className="section section--current">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="section-title">Current Role: {currentRole.company}</h2>
        <p className="section-subtitle">
          {currentRole.title} | {currentRole.period}
        </p>
        <div className="current-grid">
          {currentRole.items.map((item, index) => (
            <div key={item.label} className="current-item">
              <div className="current-index">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="current-body">
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CurrentRoleSection;
