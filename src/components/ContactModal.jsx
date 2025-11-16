import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  if (!open) return null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Collaboration",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          inquiry_type: form.type,
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus({
        state: "success",
        message: "Message sent successfully!",
      });

      setForm({
        name: "",
        email: "",
        type: "Collaboration",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        state: "error",
        message: "Error sending message.",
      });
    }
  };

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>Get in Touch</h2>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="Collaboration">Collaborate</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Connect">Connect</option>
          </select>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn primary">
            {status.state === "loading" ? "Sending..." : "Send"}
          </button>

          {status.state !== "idle" && (
            <p className={`modal-status ${status.state}`}>
              {status.message}
            </p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
}
