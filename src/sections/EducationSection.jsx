import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/content.js';

function EducationSection() {
  return (
    <section id="education" className="section section--education">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="section-title">{education.title}</h2>
        <div className="education-grid">
          {education.columns.map((col) => (
            <div key={col.heading} className="education-card">
              <h3>{col.heading}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item.title}>
                    <div className="education-item-title">{item.title}</div>
                    {item.subtitle && (
                      <div className="education-item-subtitle">
                        {item.subtitle}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default EducationSection;
