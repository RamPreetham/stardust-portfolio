import React from 'react';
import { motion } from 'framer-motion';
import { summary } from '../data/content.js';

function SummarySection() {
  return (
    <section id="summary" className="section section--summary">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2 className="section-title">{summary.title}</h2>
        <div className="summary-grid">
          {summary.paragraphs.map((p, idx) => (
            <p key={idx} className="summary-text">
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SummarySection;
