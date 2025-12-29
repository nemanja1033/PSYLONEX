"use client";

import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import PrincipleAccordion from "../../components/ui/PrincipleAccordion";
import NetworkBackground from "../../components/ui/NetworkBackground";
import { ease } from "../../lib/motion";

const principles = [
  {
    title: "Problem-first systems",
    body: "We start with the operational reality, then build the technology that fits it. No platform in search of a problem."
  },
  {
    title: "Simplicity is the architecture",
    body: "If a system adds friction, it is not done. We keep what is essential and remove everything else."
  },
  {
    title: "Built for real use",
    body: "Every workflow is designed around the people who rely on it every day, not demos or marketing."
  },
  {
    title: "Long-term value",
    body: "We design for longevity, stability, and the slow evolution of an organization."
  }
];

export default function HowWeThink() {
  return (
    <main>
      <section className="hero">
        <NetworkBackground density={0.7} speed={0.25} opacity={0.35} />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Manifesto</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <h1 className="hero-title">Principles that keep the system calm.</h1>
            </motion.div>
            <p className="hero-subtitle">
              Our philosophy is engineered for clarity, reliability, and long-term
              trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How we think"
            title="System rules we never break."
            body="These principles shape every system we build, from infrastructure to interface."
          />
          <PrincipleAccordion items={principles} />
        </div>
      </section>
    </main>
  );
}
