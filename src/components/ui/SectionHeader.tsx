"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ease } from "../../lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body: string;
  extra?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  body,
  extra
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <div className="section-marker">{eyebrow}</div>
        <h2 className="section-title">
          {title}
          <motion.span
            className="title-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease }}
          />
        </h2>
      </div>
      <div className="section-body">
        {body}
        {extra}
      </div>
    </div>
  );
}
