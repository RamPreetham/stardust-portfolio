import React from 'react';
import { motion } from 'framer-motion';
import { currentRole } from '../data/content.js';

const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -30,        // slide in from the left
    scale: 0.95 
  },
  visible: i => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,   // stagger animation
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 0 18px rgba(255,138,0,0.5)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.15 }
  }
};

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
        <motion.div
        key={item.label}
        className="current-item"
        custom={index}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true, amount: 0.4 }}
        >
        <div className="current-index">
        {String(index + 1).padStart(2, "0")}
        </div>
        <div className="current-body">
        <h3>{item.label}</h3>
        <p>{item.description}</p>
        </div>
        </motion.div>
        ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CurrentRoleSection;
