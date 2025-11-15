import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/content.js';

function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="section-title">{contact.title}</h2>
        <div className="contact-grid">
          {contact.cards.map((card) => (
            <div key={card.heading} className="contact-card">
              <h3>{card.heading}</h3>
              {card.href ? (
                <a href={card.href} target="_blank" rel="noreferrer">
                  {card.body}
                </a>
              ) : (
                <p>{card.body}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Preetham Tammana · Open to cloud & backend opportunities.</p>
      </footer>
    </section>
  );
}

export default ContactSection;
