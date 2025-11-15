import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { eranovaAchievements } from '../data/content.js';

function ProgressCircle({ value }) {
  const controls = useAnimation();
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    controls.start({ strokeDashoffset: circumference * (1 - value / 100) });
  }, [controls, circumference, value]);

  return (
    <svg className="progress-ring" width="180" height="180">
      <circle
        className="progress-ring__bg"
        cx="90"
        cy="90"
        r={radius}
        strokeWidth="12"
        fill="transparent"
      />
      <motion.circle
        className="progress-ring__value"
        cx="90"
        cy="90"
        r={radius}
        strokeWidth="12"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={controls}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
        {value}%
      </text>
    </svg>
  );
}

function EranovaSection() {
  return (
    <section className="section section--eranova">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="section-title">{eranovaAchievements.company} Achievements</h2>
        <p className="section-subtitle">
          {eranovaAchievements.title} | {eranovaAchievements.period}
        </p>
        <div className="eranova-grid">
          {eranovaAchievements.metrics.map((metric) => (
            <div key={metric.label} className="eranova-card">
              <ProgressCircle value={metric.value} />
              <h3>{metric.label}</h3>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default EranovaSection;
