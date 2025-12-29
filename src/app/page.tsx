"use client";

import { motion } from "framer-motion";
import NetworkBackground from "../components/ui/NetworkBackground";
import SectionHeader from "../components/ui/SectionHeader";
import MagneticButton from "../components/ui/MagneticButton";
import CapabilityCard from "../components/ui/CapabilityCard";
import TextSweep from "../components/ui/TextSweep";
import { ease } from "../lib/motion";
import ClaritySystemSection from "../components/sections/ClaritySystemSection";

const capabilities = [
  {
    title: "Automation & Optimization",
    description:
      "We remove friction in repeatable work, shaping workflows that stay clear under pressure.",
    outcome: "Fewer bottlenecks"
  },
  {
    title: "Integration & Flow",
    description:
      "We connect scattered systems into a single, trusted stream of operational truth.",
    outcome: "Aligned visibility"
  },
  {
    title: "Decision Support",
    description:
      "We surface signals and context so leaders can act quickly and precisely.",
    outcome: "Confident action"
  },
  {
    title: "Digital Interaction",
    description:
      "We design interfaces that make complex tasks feel calm, direct, and dependable.",
    outcome: "Human-ready tools"
  },
  {
    title: "Secure Architecture",
    description:
      "We engineer resilient foundations that protect critical data and scale with growth.",
    outcome: "Durable systems"
  }
];

const systemLines = [
  {
    title: "clarity",
    body: "Information aligns into a single, dependable system of record."
  },
  {
    title: "reliability",
    body: "Operations run steadily, even when conditions shift."
  },
  {
    title: "efficiency",
    body: "Workflows move faster with fewer handoffs and less noise."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <NetworkBackground density={1.2} speed={0.3} opacity={0.7} />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Mycelium network systems</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <h1 className="hero-title">
                Reliable systems for complex human operations.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              <p className="hero-subtitle">
                Psylonex builds quiet infrastructure that turns fragmented work into
                calm, connected flow.
              </p>
            </motion.div>
            <div className="hero-actions">
              <MagneticButton href="/contact" variant="primary">
                Start a conversation
              </MagneticButton>
              <MagneticButton href="/what-we-do" variant="ghost">
                Explore capabilities
              </MagneticButton>
            </div>
          </div>
          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <div className="hero-halo" />
            <div className="hero-mushroom" />
            <ul>
              <li>Systems that organize complexity without demanding attention.</li>
              <li>Network intelligence that supports daily decisions.</li>
              <li>Engineering that grows with the organization.</li>
            </ul>
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            className="pillars"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
          >
            {systemLines.map((line) => (
              <motion.div
                key={line.title}
                className="pillar"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { ease, duration: 0.5 } }
                }}
              >
                {line.title}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="We build systems that"
            title="Order emerges from the network."
            body="Each capability assembles into a structured system, designed to support real-world operations."
          />
          <motion.div
            className="system-lines"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } }
            }}
          >
            {systemLines.map((line) => (
              <motion.div
                key={line.title}
                className="system-line"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease }
                  }
                }}
              >
                <strong>{line.title}</strong>
                <span>{line.body}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ClaritySystemSection />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we build"
            title="Capabilities that snap into place."
            body="We engineer the connective tissue across people, data, and decisions."
            extra={
              <p>
                <TextSweep>Every component is designed to be calm, precise, and dependable.</TextSweep>
              </p>
            }
          />
          <motion.div
            className="capability-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 160, damping: 22 }
                  }
                }}
              >
                <CapabilityCard
                  title={capability.title}
                  description={capability.description}
                  outcome={capability.outcome}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How we think"
            title="Principles that guide the system."
            body="Problem-first, human-centered, built for longevity."
          />
          <div className="mission-vision">
            <motion.div
              className="mission-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Problem-driven by default.</h3>
              <p>
                We start with the operational reality, then shape technology around
                it.
              </p>
            </motion.div>
            <motion.div
              className="mission-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Simplicity is the goal.</h3>
              <p>
                Clarity beats complexity. We remove the extra until the system
                feels effortless.
              </p>
            </motion.div>
            <motion.div
              className="mission-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Built for daily use.</h3>
              <p>
                Interfaces and workflows are designed for the people who rely on
                them every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Mission & vision"
            title="Foundation for long-term trust."
            body="Our mission and vision keep the system grounded in the work that matters."
          />
          <div className="mission-vision">
            <div className="mission-panel">
              <h3>Mission</h3>
              <p>
                Build IT systems that simplify complex interactions and make
                everyday work more reliable.
              </p>
            </div>
            <div className="mission-panel">
              <h3>Vision</h3>
              <p>
                Become the trusted builder of systems that quietly power better
                organizations.
              </p>
            </div>
          </div>
          <div className="mushroom-divider" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-panel">
            <h2>Start with a conversation, not a pitch.</h2>
            <p>
              Share the system you are responsible for. We will listen, map the
              friction, and design the right infrastructure with you.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Start a conversation
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
