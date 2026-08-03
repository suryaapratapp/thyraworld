import { useId } from "react";

/**
 * Thyra World logo — two interlocking crochet stitch loops.
 *
 * The mark is literally a chain stitch: one loop pulled through another, with a
 * real over/under weave rather than a flat overlap. It reads as craft up close
 * and as connection at a glance, and the chunky stroke is deliberate so it
 * survives at favicon and Instagram-avatar sizes.
 *
 * IDs are scoped with useId() because the logo renders more than once per page
 * (navbar, footer, popup) — duplicate gradient/mask ids would break rendering.
 */

const RY = 27;
const LOOP = [
  `M0 ${-RY}`,
  `C ${RY * 0.58} ${-RY}, ${RY * 0.9} ${-RY * 0.58}, ${RY * 0.9} ${-RY * 0.07}`,
  `C ${RY * 0.9} ${RY * 0.55}, ${RY * 0.47} ${RY * 0.9}, 0 ${RY * 1.16}`,
  `C ${-RY * 0.47} ${RY * 0.9}, ${-RY * 0.9} ${RY * 0.55}, ${-RY * 0.9} ${-RY * 0.07}`,
  `C ${-RY * 0.9} ${-RY * 0.58}, ${-RY * 0.58} ${-RY}, 0 ${-RY}`,
].join(" ");

// The front loop's top-left arc, redrawn on top to complete the weave.
const LOOP_TOP = `M0 ${-RY} C ${RY * 0.58} ${-RY}, ${RY * 0.9} ${-RY * 0.58}, ${RY * 0.9} ${-RY * 0.07}`;

const SW = 14;
const DX = 11;
const ROT = 17;
const CY = 45;

export function ThyraMark({ className = "", title }) {
  const uid = useId().replace(/:/g, "");
  const gA = `tw-a-${uid}`;
  const gB = `tw-b-${uid}`;
  const mask = `tw-m-${uid}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={gA} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF4D8D" />
          <stop offset="100%" stopColor="#FF7A5C" />
        </linearGradient>
        <linearGradient id={gB} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4CC9F0" />
        </linearGradient>
        {/* Knocks a gap out of the back loop so the front one passes through it */}
        <mask id={mask}>
          <rect width="100" height="100" fill="#fff" />
          <g transform={`translate(${50 + DX} ${CY}) rotate(${ROT})`}>
            <path d={LOOP} stroke="#000" strokeWidth={SW * 1.9} strokeLinecap="round" fill="none" />
          </g>
        </mask>
      </defs>

      {/* Back loop */}
      <g transform={`translate(${50 + DX} ${CY}) rotate(${ROT})`}>
        <path d={LOOP} stroke={`url(#${gB})`} strokeWidth={SW} strokeLinecap="round" fill="none" />
      </g>

      {/* Front loop, cut where it passes behind */}
      <g mask={`url(#${mask})`}>
        <g transform={`translate(${50 - DX} ${CY}) rotate(${-ROT})`}>
          <path d={LOOP} stroke={`url(#${gA})`} strokeWidth={SW} strokeLinecap="round" fill="none" />
        </g>
      </g>

      {/* …and back over the top, completing the interlock */}
      <g transform={`translate(${50 - DX} ${CY}) rotate(${-ROT})`}>
        <path d={LOOP_TOP} stroke={`url(#${gA})`} strokeWidth={SW} strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/** Mark + wordmark, for the navbar and footer. */
export default function ThyraLogo({ className = "", markClassName = "h-10 w-auto", stacked = false }) {
  return (
    <span
      className={`inline-flex ${stacked ? "flex-col items-center gap-1.5" : "items-center gap-2.5"} ${className}`}
    >
      <ThyraMark className={markClassName} />
      <span className={stacked ? "text-center" : ""}>
        <span className="block font-display text-lg font-bold leading-none tracking-tight text-ink-900">
          Thyra<span className="text-candy-pink">World</span>
        </span>
        <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
          Handmade · India
        </span>
      </span>
    </span>
  );
}
