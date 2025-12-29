"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { ease } from "../../lib/motion";

type Node = { x: number; y: number; r: number };

type Line = { x1: number; y1: number; x2: number; y2: number };

const chaoticNodes: Node[] = [
  { x: 120, y: 80, r: 6 },
  { x: 60, y: 160, r: 4 },
  { x: 180, y: 140, r: 5 },
  { x: 90, y: 240, r: 6 },
  { x: 200, y: 240, r: 4 },
  { x: 140, y: 310, r: 5 }
];

const chaoticLines: Line[] = [
  { x1: 60, y1: 160, x2: 180, y2: 140 },
  { x1: 120, y1: 80, x2: 90, y2: 240 },
  { x1: 180, y1: 140, x2: 140, y2: 310 },
  { x1: 60, y1: 160, x2: 200, y2: 240 }
];

const clearNodes: Node[] = [
  { x: 980, y: 110, r: 5 },
  { x: 1040, y: 110, r: 5 },
  { x: 1100, y: 110, r: 5 },
  { x: 980, y: 190, r: 5 },
  { x: 1040, y: 190, r: 5 },
  { x: 1100, y: 190, r: 5 },
  { x: 980, y: 270, r: 5 },
  { x: 1040, y: 270, r: 5 },
  { x: 1100, y: 270, r: 5 }
];

const clearLines: Line[] = [
  { x1: 980, y1: 110, x2: 1100, y2: 110 },
  { x1: 980, y1: 190, x2: 1100, y2: 190 },
  { x1: 980, y1: 270, x2: 1100, y2: 270 },
  { x1: 980, y1: 110, x2: 980, y2: 270 },
  { x1: 1040, y1: 110, x2: 1040, y2: 270 },
  { x1: 1100, y1: 110, x2: 1100, y2: 270 }
];

const labels = [
  "Clear Communication",
  "Better Decisions",
  "Operational Clarity",
  "Reduced Friction"
];

export default function ClaritySystemSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"]
  });

  const chaosX = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const chaosOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);
  const coreScale = useTransform(scrollYProgress, [0.25, 0.6], [0.92, 1]);
  const coreGlow = useTransform(scrollYProgress, [0.25, 0.6], [0.2, 0.6]);
  const clarityX = useTransform(scrollYProgress, [0.35, 0.8], [-120, 0]);
  const clarityOpacity = useTransform(scrollYProgress, [0.35, 0.8], [0, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0.7, 0.95], [0, 1]);

  const staticValues = useMemo(
    () => ({
      chaosX: 0,
      chaosOpacity: 1,
      coreScale: 1,
      coreGlow: 0.5,
      clarityX: 0,
      clarityOpacity: 1,
      labelOpacity: 1
    }),
    []
  );

  const mChaosX = reduceMotion ? staticValues.chaosX : chaosX;
  const mChaosOpacity = reduceMotion ? staticValues.chaosOpacity : chaosOpacity;
  const mCoreScale = reduceMotion ? staticValues.coreScale : coreScale;
  const mCoreGlow = reduceMotion ? staticValues.coreGlow : coreGlow;
  const mClarityX = reduceMotion ? staticValues.clarityX : clarityX;
  const mClarityOpacity = reduceMotion ? staticValues.clarityOpacity : clarityOpacity;
  const mLabelOpacity = reduceMotion ? staticValues.labelOpacity : labelOpacity;

  return (
    <section className="section clarity-system" ref={ref}>
      <div className="container">
        <div className="clarity-system-header">
          <div className="section-marker">System Translation</div>
          <h2 className="section-title">From fragmented inputs to organized operations.</h2>
        </div>
        <div className="clarity-system-visual" aria-hidden="true">
          <svg viewBox="0 0 1200 360" role="presentation">
            <motion.g
              style={{ x: mChaosX, opacity: mChaosOpacity }}
              transition={{ ease, duration: 0.6 }}
            >
              {chaoticLines.map((line, index) => (
                <line
                  key={`cl-${index}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  className="clarity-line chaos"
                />
              ))}
              {chaoticNodes.map((node, index) => (
                <circle
                  key={`cn-${index}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  className="clarity-node chaos"
                />
              ))}
            </motion.g>

            <motion.g
              style={{ scale: mCoreScale, originX: "50%", originY: "50%" }}
              transition={{ ease, duration: 0.6 }}
            >
              <motion.circle
                cx="600"
                cy="180"
                r="78"
                className="clarity-core"
                style={{ opacity: mCoreGlow }}
              />
              <path
                d="M600 94c-46 0-82 30-90 70-3 14 7 28 22 29 25 2 45 4 68 4 23 0 43-2 68-4 15-1 25-15 22-29-8-40-44-70-90-70zm-36 120v38c0 20 16 36 36 36s36-16 36-36v-38h-72z"
                className="clarity-core-outline"
              />
            </motion.g>

            <motion.g
              style={{ x: mClarityX, opacity: mClarityOpacity }}
              transition={{ ease, duration: 0.6 }}
            >
              {clearLines.map((line, index) => (
                <line
                  key={`rl-${index}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  className="clarity-line clean"
                />
              ))}
              {clearNodes.map((node, index) => (
                <circle
                  key={`rn-${index}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  className="clarity-node clean"
                />
              ))}
            </motion.g>
          </svg>
        </div>
        <motion.div className="clarity-labels" style={{ opacity: mLabelOpacity }}>
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
