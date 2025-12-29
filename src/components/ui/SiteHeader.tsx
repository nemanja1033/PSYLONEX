"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-think", label: "How We Think" },
  { href: "/mission-vision", label: "Mission & Vision" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Psylonex
      </Link>
      <LayoutGroup>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                className="nav-link"
                href={item.href}
                key={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </LayoutGroup>
      <MagneticButton href="/contact" variant="primary">
        Start a conversation
      </MagneticButton>
    </header>
  );
}
