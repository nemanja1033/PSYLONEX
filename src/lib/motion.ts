export const ease = [0.22, 1, 0.36, 1] as const;

export const durations = {
  fast: 0.35,
  medium: 0.6,
  slow: 0.9
} as const;

export const spring = {
  type: "spring" as const,
  stiffness: 160,
  damping: 24,
  mass: 0.7
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.medium, ease }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.medium, ease }
  }
};
