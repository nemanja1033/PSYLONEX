"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { ease } from "../../lib/motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="page-transition"
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease }
        }}
        exit={{ opacity: 0, y: -18, transition: { duration: 0.4, ease } }}
      >
        <motion.div
          className="transition-mask"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.6, 1, 1.05],
            transition: { duration: 0.8, ease }
          }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease } }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
