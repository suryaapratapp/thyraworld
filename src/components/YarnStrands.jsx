/**
 * Decorative animated yarn strands that trail behind the hero.
 * Purely ornamental — hidden from assistive tech, and the draw animation is
 * disabled by the reduced-motion rule in styles.css.
 */
export default function YarnStrands({ className = "" }) {
  const strands = [
    { d: "M-40 220 C 180 90, 420 340, 660 180 S 1100 60, 1480 250", color: "#FF6B4A", w: 2.4, delay: "0s" },
    { d: "M-40 320 C 220 200, 380 470, 700 300 S 1120 190, 1480 350", color: "#A78BFA", w: 1.9, delay: "0.35s" },
    { d: "M-40 420 C 200 300, 460 560, 720 400 S 1160 300, 1480 440", color: "#4ECDC4", w: 1.6, delay: "0.7s" },
    { d: "M-40 150 C 260 40, 400 260, 760 120 S 1180 20, 1480 160", color: "#FFB627", w: 1.3, delay: "1.05s" },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 1440 560"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {strands.map((s, i) => (
        <path
          key={i}
          d={s.d}
          stroke={s.color}
          strokeWidth={s.w}
          strokeLinecap="round"
          opacity="0.5"
          strokeDasharray="1400"
          className="animate-yarn-draw"
          style={{ animationDelay: s.delay }}
        />
      ))}
      {/* Yarn balls resting on the strands */}
      {[
        { cx: 218, cy: 168, r: 16, c: "#FF6B4A" },
        { cx: 1042, cy: 138, r: 11, c: "#FFB627" },
        { cx: 640, cy: 372, r: 13, c: "#4ECDC4" },
      ].map((b, i) => (
        <g key={i} opacity="0.75">
          <circle cx={b.cx} cy={b.cy} r={b.r} fill={b.c} opacity="0.28" />
          <circle cx={b.cx} cy={b.cy} r={b.r} stroke={b.c} strokeWidth="1.6" fill="none" />
          <path
            d={`M${b.cx - b.r} ${b.cy} a${b.r} ${b.r * 0.45} 0 0 0 ${b.r * 2} 0`}
            stroke={b.c}
            strokeWidth="1.2"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}
