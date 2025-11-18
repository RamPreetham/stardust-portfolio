import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });

    try {
      await emailjs.send(
        "service_drijqxw",      
        "template_nmdci1s",     
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          inquiry_type: form.type,
        },
        "rESgFnU2G8-ZCyJE5"       
      );

      setStatus({
        state: "success",
        message: "Thanks for reaching out! I’ll get back to you soon.",
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
        message: "Something went wrong. Please try again.",
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
        className="modal-container contact-form"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>Get in Touch</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="type">I’d like to</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="Collaboration">Collaborate</option>
                <option value="Opportunity">Discuss an opportunity</option>
                <option value="Connect">Just connect</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn primary"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status.state === "success" && (
            <p className="modal-status success">{status.message}</p>
          )}
          {status.state === "error" && (
            <p className="modal-status error">{status.message}</p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
}
