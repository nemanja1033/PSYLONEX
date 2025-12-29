"use client";

import { memo, useEffect, useRef } from "react";

type NetworkBackgroundProps = {
  density?: number;
  speed?: number;
  opacity?: number;
  className?: string;
  interactive?: boolean;
  animated?: boolean;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
};

type Pulse = {
  from: Node;
  to: Node;
  progress: number;
  speed: number;
};

function NetworkBackground({
  density = 1,
  speed = 0.25,
  opacity = 0.6,
  className,
  interactive = true,
  animated = true
}: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const shouldInteract = interactive && !isCoarse && !prefersReduced;
    const shouldAnimate = animated && !prefersReduced;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let lastTime = 0;
    let isRunning = false;
    let isVisible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const baseCount = Math.floor((width * height) / 30000);
      const mobileFactor = width < 720 ? 0.45 : 1;
      const count = Math.max(14, Math.floor(baseCount * density * mobileFactor));
      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        depth: Math.random() * 0.8 + 0.2
      }));
      pulses = [];
    };

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const from = nodes[Math.floor(Math.random() * nodes.length)];
      const nearby = nodes
        .map((node) => ({
          node,
          dist: Math.hypot(from.x - node.x, from.y - node.y)
        }))
        .filter((item) => item.node !== from && item.dist < 200)
        .sort((a, b) => a.dist - b.dist);
      if (!nearby.length) return;
      const to = nearby[0].node;
      pulses.push({ from, to, progress: 0, speed: 0.006 + Math.random() * 0.004 });
    };

    const draw = (time: number) => {
      if (!isVisible) {
        isRunning = false;
        return;
      }
      const delta = time - lastTime;
      const frameDelta = shouldAnimate ? Math.min(delta || 16, 32) : 0;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;
      const scrollOffset = window.scrollY * 0.08;
      const maxDist = width < 720 ? 130 : 170;
      const maxLinks = width < 720 ? 2 : 3;
      const linkCounts = new Array(nodes.length).fill(0);

      nodes.forEach((node) => {
        node.x += node.vx * (frameDelta / 16);
        node.y += node.vy * (frameDelta / 16);

        if (node.x < -40) node.x = width + 40;
        if (node.x > width + 40) node.x = -40;
        if (node.y < -40) node.y = height + 40;
        if (node.y > height + 40) node.y = -40;

        if (shouldInteract && pointer.active) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            const force = (160 - dist) / 160;
            node.x += (dx / dist) * force * 1.2;
            node.y += (dy / dist) * force * 1.2;
          }
        }
      });

      ctx.globalAlpha = opacity;
      ctx.strokeStyle = "rgba(245, 243, 239, 0.18)";
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);

      nodes.forEach((node, index) => {
        for (let j = index + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < maxDist) {
            if (linkCounts[index] >= maxLinks || linkCounts[j] >= maxLinks) {
              continue;
            }
            const alpha = 1 - dist / maxDist;
            let boost = 0;
            if (shouldInteract && pointer.active) {
              const mx = (node.x + other.x) / 2;
              const my = (node.y + other.y) / 2;
              const pd = Math.hypot(mx - pointer.x, my - pointer.y);
              boost = Math.max(0, 1 - pd / 160) * 0.45;
            }
            ctx.globalAlpha = opacity * (alpha + boost);
            ctx.strokeStyle =
              boost > 0.2
                ? "rgba(107, 114, 255, 0.5)"
                : "rgba(245, 243, 239, 0.18)";
            ctx.beginPath();
            ctx.moveTo(node.x, node.y + scrollOffset * node.depth);
            ctx.lineTo(other.x, other.y + scrollOffset * other.depth);
            ctx.stroke();
            linkCounts[index] += 1;
            linkCounts[j] += 1;
          }
        }
      });

      ctx.setLineDash([]);
      nodes.forEach((node) => {
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "rgba(245, 243, 239, 0.75)";
        ctx.beginPath();
        ctx.arc(node.x, node.y + scrollOffset * node.depth, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReduced) {
        if (Math.random() < 0.01 && pulses.length < 3) {
          spawnPulse();
        }

        pulses = pulses
          .map((pulse) => ({ ...pulse, progress: pulse.progress + pulse.speed }))
          .filter((pulse) => pulse.progress < 1);

        pulses.forEach((pulse) => {
          const x = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
          const y = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;
          ctx.globalAlpha = 0.6;
          ctx.fillStyle = "rgba(107, 114, 255, 0.8)";
          ctx.beginPath();
          ctx.arc(x, y + scrollOffset * 0.4, 2.2, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const drawOnce = () => draw(0);
    resize();
    const start = () => {
      if (!shouldAnimate || isRunning) return;
      isRunning = true;
      rafRef.current = requestAnimationFrame(draw);
    };
    const stop = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      isRunning = false;
    };
    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
      if (!isVisible) {
        stop();
      } else if (shouldAnimate) {
        start();
      } else {
        drawOnce();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (!isVisible) {
          stop();
        } else if (shouldAnimate) {
          start();
        } else {
          drawOnce();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    if (shouldAnimate) {
      start();
    } else {
      drawOnce();
    }

    const handleResize = () => {
      resize();
      if (!shouldAnimate) drawOnce();
    };
    let pending = false;
    let lastEvent: MouseEvent | null = null;

    const handleMove = (event: MouseEvent) => {
      if (!shouldInteract) return;
      lastEvent = event;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect();
        if (lastEvent) {
          pointerRef.current = {
            x: lastEvent.clientX - rect.left,
            y: lastEvent.clientY - rect.top,
            active: true
          };
        }
        pending = false;
      });
    };
    const handleLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    if (shouldInteract) {
      canvas.addEventListener("mousemove", handleMove);
      canvas.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (shouldInteract) {
        canvas.removeEventListener("mousemove", handleMove);
        canvas.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, [density, speed, opacity, interactive]);

  return (
    <div className={`network-layer ${className ?? ""}`} aria-hidden="true">
      <canvas ref={canvasRef} className="network-canvas" />
    </div>
  );
}

export default memo(NetworkBackground);
