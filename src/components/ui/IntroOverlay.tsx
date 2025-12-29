"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ease } from "../../lib/motion";
import NetworkBackground from "./NetworkBackground";

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = "psylonex:intro";
    const hasSeen = window.localStorage.getItem(key);
    if (!hasSeen) {
      setShow(true);
      window.localStorage.setItem(key, "1");
      const timeout = window.setTimeout(() => setShow(false), 1200);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <NetworkBackground density={1.4} speed={0.35} opacity={0.5} interactive={false} />
          <motion.div
            className="intro-mushroom"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, ease } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          />
          <motion.div
            className="intro-mark"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            Psylonex
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
