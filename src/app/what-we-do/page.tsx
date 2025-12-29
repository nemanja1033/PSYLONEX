"use client";

import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import NetworkBackground from "../../components/ui/NetworkBackground";
import CapabilitiesInteractive from "../../components/sections/CapabilitiesInteractive";
import { ease } from "../../lib/motion";

const capabilities = [
  {
    title: "Process automation",
    outcome: "Smooth execution",
    detail:
      "We streamline workflows and automate the right steps so teams move faster without losing control.",
    bullets: ["Map real-world processes", "Reduce manual handoffs"]
  },
  {
    title: "System integration",
    outcome: "Unified context",
    detail:
      "We connect applications, data, and teams into a single operational backbone.",
    bullets: ["Shared system of record", "Reliable data flow"]
  },
  {
    title: "Decision support",
    outcome: "Better decisions",
    detail:
      "We surface the signals leaders need with clear, trustworthy context.",
    bullets: ["Actionable dashboards", "Critical alerts"]
  },
  {
    title: "Digital interaction",
    outcome: "Human-ready tools",
    detail:
      "We design digital experiences that make complex tasks feel calm and clear.",
    bullets: ["Intuitive interfaces", "Low-friction workflows"]
  },
  {
    title: "Secure architecture",
    outcome: "Long-term trust",
    detail:
      "We engineer resilient systems that scale while protecting sensitive operations.",
    bullets: ["Security by design", "Scalable foundations"]
  }
];

export default function WhatWeDo() {
  return (
    <main>
      <section className="hero">
        <NetworkBackground density={0.8} speed={0.25} opacity={0.4} />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Capabilities</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <h1 className="hero-title">Systems that connect, simplify, and sustain.</h1>
            </motion.div>
            <p className="hero-subtitle">
              Each capability is designed to align people, information, and
              decision-making without adding noise.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Capabilities as building blocks."
            body="Each module snaps into the system to create a clear, dependable operational flow."
          />
          <CapabilitiesInteractive items={capabilities} />
        </div>
      </section>
    </main>
  );
}
