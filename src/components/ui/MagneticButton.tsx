"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
};

const MotionLink = motion(Link);

export default function MagneticButton({
  href,
  variant = "ghost",
  children,
  className
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 18, mass: 0.6 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 18, mass: 0.6 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionLink
      href={href}
      className={`button ${variant} ${className ?? ""}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: xSpring, y: ySpring } as any}
    >
      <span>{children}</span>
    </MotionLink>
  );
}
