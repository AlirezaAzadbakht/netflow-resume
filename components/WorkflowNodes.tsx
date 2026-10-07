import { motion } from "framer-motion";
import { useMemo } from "react";

type NodeDef = {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
  delay: number;
};

type EdgeDef = {
  from: string;
  to: string;
  delay: number;
};

const nodes: NodeDef[] = [
  { id: "input", x: 90, y: 120, label: "Input", color: "#A78BFA", delay: 0.1 },
  { id: "agent", x: 360, y: 80, label: "Agent", color: "#7C3AED", delay: 0.4 },
  { id: "rag", x: 360, y: 240, label: "RAG", color: "#8B5CF6", delay: 0.55 },
  { id: "model", x: 640, y: 160, label: "Model", color: "#7C3AED", delay: 0.75 },
  { id: "voice", x: 640, y: 320, label: "Voice", color: "#A78BFA", delay: 0.9 },
  { id: "output", x: 900, y: 200, label: "Output", color: "#6D28D9", delay: 1.1 },
  { id: "log", x: 130, y: 320, label: "Log", color: "#C4B5FD", delay: 0.25 },
];

const edges: EdgeDef[] = [
  { from: "input", to: "agent", delay: 0.5 },
  { from: "input", to: "rag", delay: 0.6 },
  { from: "log", to: "rag", delay: 0.7 },
  { from: "agent", to: "model", delay: 0.85 },
  { from: "rag", to: "model", delay: 0.9 },
  { from: "rag", to: "voice", delay: 1.0 },
  { from: "model", to: "output", delay: 1.2 },
  { from: "voice", to: "output", delay: 1.3 },
];

function bezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  const dx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

export function WorkflowNodes() {
  const nodeMap = useMemo(() => {
    const m = new Map<string, NodeDef>();
    nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1000 440"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full opacity-95"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.0" />
          </linearGradient>
          <radialGradient id="node-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.18" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map((e, i) => {
          const a = nodeMap.get(e.from)!;
          const b = nodeMap.get(e.to)!;
          const d = bezierPath(a.x + 28, a.y, b.x - 28, b.y);
          return (
            <g key={i}>
              <motion.path
                d={d}
                fill="none"
                stroke="url(#edge-grad)"
                strokeWidth={2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: e.delay, ease: "easeOut" }}
              />
              <motion.circle
                r={3}
                fill="#7C3AED"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{
                  duration: 3,
                  delay: e.delay + 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              >
                <animateMotion dur="3s" repeatCount="indefinite" begin={`${e.delay + 1.5}s`} path={d} />
              </motion.circle>
            </g>
          );
        })}

        {nodes.map((n) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: n.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={44}
              fill="url(#node-glow)"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: n.delay, ease: "easeInOut" }}
            />
            <motion.g
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: n.delay * 0.5, ease: "easeInOut" }}
            >
              <rect
                x={n.x - 34}
                y={n.y - 16}
                width={68}
                height={32}
                rx={10}
                fill="white"
                stroke={n.color}
                strokeWidth={1.75}
                filter="url(#soft-shadow)"
              />
              <text
                x={n.x}
                y={n.y + 5}
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill={n.color}
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", letterSpacing: "0.2px" }}
              >
                {n.label}
              </text>
            </motion.g>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
