import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { summary } from "../data/content.js";

function TypewriterParagraph({ text, startDelay = 0, speed = 20 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, startDelay, speed]);

  return (
    <p className="summary-text summary-text--typewriter">
      {displayed}
      <span className="summary-caret" />
    </p>
  );
}

function SummarySection() {
  return (
    <section id="summary" className="section section--summary">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="section-title">{summary.title}</h2>
        <div className="summary-grid">
          {summary.paragraphs.map((p, idx) => (
          <div className="summary-text-box" key={idx}>
          <TypewriterParagraph
         text={p}
         startDelay={idx * 1400}
         speed={15}
      />
    </div>
  ))}
</div>

      </motion.div>
    </section>
  );
}

export default SummarySection;
