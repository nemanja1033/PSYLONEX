"use client";

import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import { ease } from "../../lib/motion";
import NetworkBackground from "../../components/ui/NetworkBackground";

export default function MissionVision() {
  return (
    <main>
      <section className="hero">
        <NetworkBackground density={0.7} speed={0.25} opacity={0.35} />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Foundation</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <h1 className="hero-title">The core that keeps the network honest.</h1>
            </motion.div>
            <p className="hero-subtitle">
              Mission and vision define the direction, tone, and responsibility of
              every system we design.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Mission & vision"
            title="Two panels, one direction."
            body="Today we build dependable systems. Tomorrow we help organizations rely on them without hesitation."
          />
          <div className="mission-vision">
            <motion.div
              className="mission-panel"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 0.8, ease }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>Mission</h3>
              <p>
                Build IT systems that make complex human interactions simple,
                reliable, and efficient.
              </p>
            </motion.div>
            <motion.div
              className="mission-panel"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>Vision</h3>
              <p>
                Become the trusted builder of systems that quietly power better
                organizations.
              </p>
            </motion.div>
          </div>
          <div className="mushroom-divider" />
        </div>
      </section>
    </main>
  );
}
