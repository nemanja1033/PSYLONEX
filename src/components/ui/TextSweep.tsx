"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ease } from "../../lib/motion";

type TextSweepProps = {
  children: ReactNode;
};

export default function TextSweep({ children }: TextSweepProps) {
  return (
    <motion.span
      className="text-sweep"
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.span>
  );
}
