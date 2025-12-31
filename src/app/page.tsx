"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
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

const heroTags = [
  "Operational strategy",
  "Experience design",
  "Systems engineering",
  "Decision intelligence"
];

const heroHighlights = [
  {
    title: "System discovery",
    body: "Map workflows, data handoffs, and ownership across teams."
  },
  {
    title: "Architecture and build",
    body: "Design and ship resilient platforms with clear interfaces."
  },
  {
    title: "Enablement",
    body: "Documentation, training, and governance for long-term use."
  }
];

const heroStats = [
  { label: "Time-to-clarity", value: "Weeks, not quarters" },
  { label: "System map", value: "Shared across teams" },
  { label: "Operational impact", value: "Less friction, more signal" }
];

const agencyNodes = [
  {
    title: "Discovery",
    body: "Operational mapping, stakeholder interviews, signal capture.",
    tag: "Signal audit",
    x: "-32%",
    y: "-18%"
  },
  {
    title: "Systems design",
    body: "Architecture, integration plans, governance models.",
    tag: "Blueprint",
    x: "30%",
    y: "-20%"
  },
  {
    title: "Experience design",
    body: "Interfaces and workflows crafted for daily use.",
    tag: "UX + UI",
    x: "34%",
    y: "12%"
  },
  {
    title: "Engineering",
    body: "Platforms, automations, data pipelines, reliable delivery.",
    tag: "Build",
    x: "-34%",
    y: "16%"
  },
  {
    title: "Enablement",
    body: "Documentation, training, playbooks for adoption.",
    tag: "Enable",
    x: "-6%",
    y: "36%"
  },
  {
    title: "Decision intelligence",
    body: "Dashboards, alerts, and feedback loops.",
    tag: "Operate",
    x: "22%",
    y: "34%"
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

const focusAreas = [
  {
    title: "Operational strategy",
    description:
      "Audit the reality of daily work, define priorities, and align leadership."
  },
  {
    title: "Experience design",
    description:
      "Design interfaces and flows that make complex tasks feel calm and direct."
  },
  {
    title: "Systems engineering",
    description:
      "Build platforms, integrations, and automations that scale without chaos."
  },
  {
    title: "Decision intelligence",
    description:
      "Surface signals, dashboards, and alerts that keep teams in control."
  }
];

const engagementPhases = [
  {
    title: "Signal audit",
    detail: "Short diagnostic to reveal friction, risk, and missing data."
  },
  {
    title: "System blueprint",
    detail: "Architecture, experience, and integration plan with clear milestones."
  },
  {
    title: "Build + enable",
    detail: "Iterative delivery with playbooks and adoption support."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <NetworkBackground density={1.4} speed={0.35} opacity={0.7} />
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
                Psylonex designs digital systems that make complex operations feel
                clear, predictable, and human.
              </p>
            </motion.div>
            <motion.div
              className="hero-tags"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.16 }}
            >
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </motion.div>
            <div className="hero-actions">
              <MagneticButton href="/contact" variant="primary">
                Start a conversation
              </MagneticButton>
              <MagneticButton href="/what-we-do" variant="ghost">
                Explore capabilities
              </MagneticButton>
            </div>
            <motion.div
              className="hero-metrics"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } }
              }}
            >
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="hero-metric"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { ease, duration: 0.5 } }
                  }}
                >
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <div className="hero-halo" />
            <div className="hero-mushroom" />
            <ul className="hero-panel-list">
              {heroHighlights.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
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

      <section className="section section--agency-map">
        <div className="container">
          <SectionHeader
            eyebrow="Agency map"
            title="A visual system of what we do."
            body="A single operational spine connects research, design, engineering, and intelligence into a working system."
          />
          <motion.div
            className="agency-map"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="agency-visual">
              <svg
                className="agency-rings"
                viewBox="0 0 640 640"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="agencyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(58, 214, 196, 0.45)" />
                    <stop offset="60%" stopColor="rgba(255, 138, 76, 0.18)" />
                    <stop offset="100%" stopColor="rgba(10, 12, 11, 0)" />
                  </radialGradient>
                  <linearGradient id="agencyStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(58, 214, 196, 0.45)" />
                    <stop offset="100%" stopColor="rgba(255, 138, 76, 0.55)" />
                  </linearGradient>
                </defs>
                <circle cx="320" cy="320" r="280" fill="url(#agencyGlow)" />
                <circle cx="320" cy="320" r="210" className="agency-ring" />
                <circle cx="320" cy="320" r="150" className="agency-ring agency-ring--soft" />
                <circle cx="320" cy="320" r="95" className="agency-ring agency-ring--core" />
                <path
                  className="agency-arc"
                  d="M90 320c60-140 170-210 230-220"
                />
                <path
                  className="agency-arc agency-arc--reverse"
                  d="M560 330c-70 140-170 200-240 210"
                />
              </svg>
              <div className="agency-core">
                <span className="agency-core-eyebrow">Operational spine</span>
                <h3>Clarity system</h3>
                <p>
                  We align people, data, and decisions into a single system of
                  record that keeps operations calm under pressure.
                </p>
              </div>
              {agencyNodes.map((node) => (
                <div
                  key={node.title}
                  className="agency-node"
                  style={
                    { "--x": node.x, "--y": node.y } as CSSProperties
                  }
                >
                  <div className="agency-node-tag">{node.tag}</div>
                  <h4>{node.title}</h4>
                  <p>{node.body}</p>
                </div>
              ))}
              <div className="agency-pulse agency-pulse--one" />
              <div className="agency-pulse agency-pulse--two" />
            </div>
            <div className="agency-summary">
              <div className="agency-summary-card">
                <span>Outcome</span>
                <strong>Connected operations</strong>
                <p>
                  Strategy and delivery stay aligned, with clear ownership and
                  real-time visibility.
                </p>
              </div>
              <div className="agency-summary-card">
                <span>Signal</span>
                <strong>Decisions in context</strong>
                <p>
                  Data flows into the right hands without extra dashboards or noise.
                </p>
              </div>
              <div className="agency-summary-card">
                <span>System</span>
                <strong>Built to last</strong>
                <p>
                  Governance, playbooks, and training keep the system dependable.
                </p>
              </div>
            </div>
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

      <section className="section section--focus">
        <div className="container">
          <SectionHeader
            eyebrow="Agency focus"
            title="We work across the full operational stack."
            body="From strategy to shipped systems, we translate complexity into reliable, everyday tools."
          />
          <motion.div
            className="focus-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                className="focus-card"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 160, damping: 24 }
                  }
                }}
              >
                <div className="focus-meta">Primary lane</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
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

      <section className="section section--engagement">
        <div className="container">
          <SectionHeader
            eyebrow="Engagement flow"
            title="From signals to systems."
            body="A clear three-phase approach keeps teams aligned and delivery predictable."
          />
          <motion.div
            className="engagement-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {engagementPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                className="engagement-card"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { ease, duration: 0.5 } }
                }}
              >
                <div className="engagement-step">{`0${index + 1}`}</div>
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.detail}</p>
                </div>
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
