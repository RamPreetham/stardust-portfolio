import React from 'react';
import { motion } from 'framer-motion';
import { accentureImpact } from '../data/content.js';

const deliveryCardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 30,
    scale: 0.95,
    rotateX: -8,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: i * 0.12,
    },
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: i * 0.12,
    },
  }),
  hover: {
    scale: 1.03,
    y: -4,
    boxShadow: "0 0 24px rgba(255,138,0,0.55)",
    transition: { duration: 0.18, ease: "easeOut" },
  },
  tap: {
    scale: 0.97,
    y: 0,
    transition: { duration: 0.12 },
  },
};

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
        className="section-inner section-inner--delivery"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h2 className="section-title">Delivery Excellence</h2>
        <div className="delivery-grid">
          {accentureImpact.delivery.map((d, index) => (
            <motion.div
              key={d.title}
              className="delivery-card"
              custom={index}
              variants={deliveryCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </section>
    </>
  );
}

export default AccentureSection;
