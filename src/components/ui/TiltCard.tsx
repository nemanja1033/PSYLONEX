"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({ children, className }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const xSpring = useSpring(rotateX, { stiffness: 180, damping: 22, mass: 0.4 });
  const ySpring = useSpring(rotateY, { stiffness: 180, damping: 22, mass: 0.4 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateXValue = ((y - rect.height / 2) / rect.height) * -8;
    const rotateYValue = ((x - rect.width / 2) / rect.width) * 8;
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: xSpring, rotateY: ySpring, transformStyle: "preserve-3d" }}
      whileHover={{ translateY: -6 }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
