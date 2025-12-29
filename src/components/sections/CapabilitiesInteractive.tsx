"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ease } from "../../lib/motion";

export type CapabilityDetail = {
  title: string;
  outcome: string;
  bullets: string[];
  detail: string;
};

type CapabilitiesInteractiveProps = {
  items: CapabilityDetail[];
};

export default function CapabilitiesInteractive({ items }: CapabilitiesInteractiveProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="capability-list">
      {items.map((item, index) => {
        const isActive = active === index;
        const bodyId = `capability-detail-${index}`;
        return (
          <motion.div
            key={item.title}
            className="capability-item"
            initial={false}
            animate={{
              borderColor: isActive
                ? "rgba(107, 114, 255, 0.45)"
                : "rgba(255, 255, 255, 0.12)",
              boxShadow: isActive
                ? "0 20px 50px rgba(0, 0, 0, 0.45)"
                : "none"
            }}
            transition={{ duration: 0.3, ease }}
          >
            <button
              type="button"
              className="capability-toggle"
              aria-expanded={isActive}
              aria-controls={bodyId}
              onClick={() => setActive(isActive ? null : index)}
            >
              <div>
                <h3>{item.title}</h3>
                <p className="capability-outcome">{item.outcome}</p>
              </div>
              <span className="capability-state">{isActive ? "Close" : "Expand"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  className="capability-detail"
                  id={bodyId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <p>{item.detail}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
