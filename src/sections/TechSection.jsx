import React from 'react';
import { motion } from 'framer-motion';
import { techStacks } from '../data/content.js';

function TechSection() {
  return (
    <section id="tech" className="section section--tech">
      <div className="section-inner">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="tech-grid">
          {techStacks.map((stack) => (
            <motion.div
              key={stack.category}
              className="tech-card"
              whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.9)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <h3>{stack.category}</h3>
              <ul>
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSection;
