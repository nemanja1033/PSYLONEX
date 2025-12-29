"use client";

import { motion } from "framer-motion";
import MagneticButton from "../../components/ui/MagneticButton";
import SectionHeader from "../../components/ui/SectionHeader";
import { ease } from "../../lib/motion";
import NetworkBackground from "../../components/ui/NetworkBackground";

export default function Contact() {
  return (
    <main>
      <section className="hero">
        <NetworkBackground density={0.6} speed={0.2} opacity={0.3} />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Contact</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <h1 className="hero-title">Let us map the system together.</h1>
            </motion.div>
            <p className="hero-subtitle">
              We begin with a conversation. Share the challenges, and we will
              shape the right infrastructure with you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Start here"
            title="Calm, focused, and serious about your operations."
            body="We work with organizations that need clarity, reliability, and long-term trust."
          />
          <div className="contact-panel">
            <h2>Start a conversation</h2>
            <p>
              Email us or schedule a short introduction. We listen first, then
              design a system that fits.
            </p>
            <form className="contact-form">
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@company.com" />
              </label>
              <label className="form-field">
                <span>Organization</span>
                <input type="text" name="company" placeholder="Company or team" />
              </label>
              <label className="form-field form-field--full">
                <span>Project context</span>
                <textarea name="message" placeholder="Briefly describe the system you need." rows={4} />
              </label>
              <div className="form-actions">
                <button className="button primary" type="submit">
                  <span>Send a request</span>
                </button>
                <MagneticButton href="mailto:hello@psylonex.com" variant="ghost">
                  hello@psylonex.com
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
