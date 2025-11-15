import React from 'react';
import { motion } from 'framer-motion';
import { amexImpact } from '../data/content.js';

const amexCardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 24,
    rotateX: -8,
    scale: 0.96,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
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
        {amexImpact.tracks.map((track, index) => (
        <motion.div
        key={track.title}
        className="amex-card"
        custom={index}
        variants={amexCardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true, amount: 0.35 }}
        >
        <h3>{track.title}</h3>
        <p>{track.body}</p>

        <motion.div
          className="amex-stat"
          animate={{
            boxShadow: [
              "0 0 0 rgba(255,138,0,0)",
              "0 0 20px rgba(255,138,0,0.7)",
              "0 0 0 rgba(255,138,0,0)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="amex-stat-label">{track.statLabel}</div>
          <motion.div
            className="amex-stat-value"
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {track.statValue}
          </motion.div>
        </motion.div>
      </motion.div>
    ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AmexImpactSection;
