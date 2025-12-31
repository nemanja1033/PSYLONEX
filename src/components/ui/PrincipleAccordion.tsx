"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ease } from "../../lib/motion";

type Principle = {
  title: string;
  body: string;
};

type PrincipleAccordionProps = {
  items: Principle[];
};

export default function PrincipleAccordion({ items }: PrincipleAccordionProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="manifesto">
      {items.map((item, index) => {
        const isActive = active === index;
        const bodyId = `principle-body-${index}`;
        return (
          <motion.div
            key={item.title}
            className="manifesto-card"
            initial={false}
            animate={{
              borderColor: isActive
                ? "rgba(255, 138, 76, 0.4)"
                : "rgba(255, 255, 255, 0.08)"
            }}
            transition={{ duration: 0.3, ease }}
          >
            <button
              className="manifesto-header"
              onClick={() => setActive(isActive ? null : index)}
              type="button"
              aria-expanded={isActive}
              aria-controls={bodyId}
            >
              <span>{item.title}</span>
              <span className="manifesto-toggle">{isActive ? "Close" : "Open"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  className="manifesto-body"
                  id={bodyId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  {item.body}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
