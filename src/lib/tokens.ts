export const colors = {
  bg: "#0a0c0f",
  surface: "#14181d",
  elevated: "#1b2126",
  text: "#f5f3ef",
  textMuted: "#d2d7db",
  accent: "#6b72ff"
} as const;

export const spacing = {
  xs: "6px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "48px",
  xxl: "72px"
} as const;

export const radius = {
  sm: "12px",
  md: "18px",
  lg: "26px",
  pill: "999px"
} as const;

export const shadow = {
  soft: "0 18px 48px rgba(0, 0, 0, 0.4)",
  strong: "0 30px 80px rgba(0, 0, 0, 0.7)"
} as const;

export const typeScale = {
  h1: "clamp(3rem, 6vw, 5.2rem)",
  h2: "clamp(1.8rem, 2.4vw, 2.4rem)",
  h3: "1.15rem",
  body: "1rem",
  caption: "0.78rem"
} as const;
