/**
 * Live SVG preview for the Design Studio.
 *
 * Every product is drawn from the same three colour zones (body / accent /
 * handle) so switching product type never loses the customer's colour choices.
 * The stitch texture is a <pattern> overlaid on the body at low opacity — it
 * reads as crochet without fighting the colour underneath.
 */

function StitchDefs({ id, stitch, tone }) {
  const stroke = tone;
  return (
    <defs>
      {stitch === "single" && (
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M4 4 L8 10 L12 4"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-4 12 L0 18 L4 12 M12 12 L16 18 L20 12"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </pattern>
      )}

      {stitch === "granny" && (
        <pattern id={id} width="30" height="30" patternUnits="userSpaceOnUse">
          <rect
            x="4"
            y="4"
            width="22"
            height="22"
            rx="3"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
          />
          <path
            d="M15 8 v14 M8 15 h14"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="15" cy="15" r="2.6" fill="none" stroke={stroke} strokeWidth="1.6" />
        </pattern>
      )}

      {stitch === "ribbed" && (
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M3 0 v12 M9 0 v12" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
        </pattern>
      )}

      {stitch === "shell" && (
        <pattern id={id} width="26" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M0 14 Q6.5 2 13 14 Q19.5 2 26 14"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </pattern>
      )}
    </defs>
  );
}

/** Fibre halo — the soft fuzz that makes flat vector read as yarn. */
function YarnFilter({ id }) {
  return (
    <defs>
      <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" />
      </filter>
      <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.20" />
        <stop offset="45%" stopColor="#fff" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.18" />
      </linearGradient>
    </defs>
  );
}

function Bag({ body, accent, handle, tex, sheen }) {
  return (
    <>
      {/* Handle passes behind the body */}
      <path
        d="M132 168 C132 96 172 64 200 64 C228 64 268 96 268 168"
        fill="none"
        stroke={handle.hex}
        strokeWidth="17"
        strokeLinecap="round"
      />
      <path
        d="M132 168 C132 96 172 64 200 64 C228 64 268 96 268 168"
        fill="none"
        stroke={handle.shadow}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.5"
        strokeDasharray="9 11"
      />
      <path d="M96 160 H304 L286 330 Q283 350 262 350 H138 Q117 350 114 330 Z" fill={body.shadow} />
      <path d="M96 160 H304 L286 326 Q283 346 262 346 H138 Q117 346 114 326 Z" fill={body.hex} />
      <path d="M96 160 H304 L286 326 Q283 346 262 346 H138 Q117 346 114 326 Z" fill={tex} />
      <path d="M96 160 H304 L286 326 Q283 346 262 346 H138 Q117 346 114 326 Z" fill={sheen} />
      <rect x="100" y="150" width="200" height="26" rx="13" fill={accent.hex} />
      <rect x="100" y="150" width="200" height="26" rx="13" fill={tex} />
      <path
        d="M108 244 H292"
        stroke={accent.hex}
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.92"
      />
    </>
  );
}

function Basket({ body, accent, handle, tex, sheen }) {
  return (
    <>
      <path d="M104 158 H296 L280 322 Q277 342 256 342 H144 Q123 342 120 322 Z" fill={body.shadow} />
      <path d="M104 158 H296 L280 318 Q277 338 256 338 H144 Q123 338 120 318 Z" fill={body.hex} />
      {/* Woven bands */}
      {[196, 236, 276].map((y, i) => (
        <path
          key={y}
          d={`M${110 + i * 4} ${y} H${290 - i * 4}`}
          stroke={accent.hex}
          strokeWidth="15"
          strokeLinecap="round"
          opacity="0.9"
        />
      ))}
      <path d="M104 158 H296 L280 318 Q277 338 256 338 H144 Q123 338 120 318 Z" fill={tex} />
      <path d="M104 158 H296 L280 318 Q277 338 256 338 H144 Q123 338 120 318 Z" fill={sheen} />
      <ellipse cx="200" cy="158" rx="96" ry="21" fill={handle.hex} />
      <ellipse cx="200" cy="158" rx="96" ry="21" fill={tex} />
      <ellipse cx="200" cy="156" rx="78" ry="13" fill={body.shadow} opacity="0.65" />
      {/* Side grips */}
      <path
        d="M108 208 q-26 4 -26 26 q0 22 26 26"
        fill="none"
        stroke={handle.hex}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M292 208 q26 4 26 26 q0 22 -26 26"
        fill="none"
        stroke={handle.hex}
        strokeWidth="13"
        strokeLinecap="round"
      />
    </>
  );
}

function Coaster({ body, accent, handle, tex, sheen }) {
  // Scalloped edging built from evenly spaced bumps around the circle
  const scallops = Array.from({ length: 20 }, (_, i) => {
    const a = (i / 20) * Math.PI * 2;
    return {
      x: 200 + Math.cos(a) * 143,
      y: 208 + Math.sin(a) * 143,
    };
  });

  return (
    <>
      {scallops.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r="15" fill={handle.hex} />
      ))}
      <circle cx="200" cy="208" r="142" fill={body.shadow} />
      <circle cx="200" cy="208" r="138" fill={body.hex} />
      <circle cx="200" cy="208" r="104" fill={accent.hex} />
      <circle cx="200" cy="208" r="72" fill={body.hex} />
      <circle cx="200" cy="208" r="38" fill={accent.hex} />
      <circle cx="200" cy="208" r="14" fill={body.hex} />
      <circle cx="200" cy="208" r="138" fill={tex} />
      <circle cx="200" cy="208" r="138" fill={sheen} />
    </>
  );
}

function AirPods({ body, accent, handle, tex, sheen }) {
  return (
    <>
      <path
        d="M262 128 q30 -6 30 -30"
        fill="none"
        stroke={handle.hex}
        strokeWidth="11"
        strokeLinecap="round"
      />
      <circle cx="294" cy="92" r="17" fill="none" stroke={handle.hex} strokeWidth="11" />
      <rect x="112" y="140" width="176" height="192" rx="52" fill={body.shadow} />
      <rect x="112" y="140" width="176" height="186" rx="52" fill={body.hex} />
      <rect x="112" y="140" width="176" height="186" rx="52" fill={tex} />
      <rect x="112" y="140" width="176" height="186" rx="52" fill={sheen} />
      {/* Lid */}
      <path d="M112 192 v-2 a52 52 0 0 1 52 -50 h72 a52 52 0 0 1 52 50 v2 Z" fill={accent.hex} />
      <path d="M112 192 v-2 a52 52 0 0 1 52 -50 h72 a52 52 0 0 1 52 50 v2 Z" fill={tex} />
      <rect x="112" y="186" width="176" height="13" rx="6.5" fill={accent.shadow} opacity="0.55" />
      <circle cx="200" cy="272" r="26" fill={accent.hex} opacity="0.9" />
      <circle cx="200" cy="272" r="26" fill={tex} />
    </>
  );
}

function LipBalm({ body, accent, handle, tex, sheen }) {
  return (
    <>
      {/* Cord + ring */}
      <path
        d="M200 120 q0 -34 -30 -46"
        fill="none"
        stroke={handle.hex}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="162" cy="66" r="16" fill="none" stroke={handle.hex} strokeWidth="10" />
      <rect x="148" y="128" width="104" height="212" rx="46" fill={body.shadow} />
      <rect x="148" y="128" width="104" height="206" rx="46" fill={body.hex} />
      <rect x="148" y="128" width="104" height="206" rx="46" fill={tex} />
      <rect x="148" y="128" width="104" height="206" rx="46" fill={sheen} />
      {/* Cap flap */}
      <path d="M148 174 v-2 a46 46 0 0 1 46 -44 h12 a46 46 0 0 1 46 44 v2 Z" fill={accent.hex} />
      <path d="M148 174 v-2 a46 46 0 0 1 46 -44 h12 a46 46 0 0 1 46 44 v2 Z" fill={tex} />
      <circle cx="200" cy="196" r="11" fill={accent.hex} />
      {[236, 268, 300].map((y) => (
        <path
          key={y}
          d={`M162 ${y} H238`}
          stroke={accent.hex}
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}
    </>
  );
}

function Pouch({ body, accent, handle, tex, sheen }) {
  return (
    <>
      <rect x="82" y="150" width="236" height="176" rx="42" fill={body.shadow} />
      <rect x="82" y="150" width="236" height="170" rx="42" fill={body.hex} />
      <rect x="82" y="150" width="236" height="170" rx="42" fill={tex} />
      <rect x="82" y="150" width="236" height="170" rx="42" fill={sheen} />
      {/* Zip band */}
      <rect x="82" y="156" width="236" height="30" rx="15" fill={accent.hex} />
      <path
        d="M96 171 H304"
        stroke={accent.shadow}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="7 7"
        opacity="0.75"
      />
      {/* Tassel pull */}
      <circle cx="300" cy="171" r="13" fill={handle.hex} />
      <path
        d="M300 184 v26"
        stroke={handle.hex}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M290 210 h20 l-4 30 h-12 Z"
        fill={handle.hex}
      />
    </>
  );
}

const SHAPES = {
  bag: Bag,
  basket: Basket,
  coaster: Coaster,
  airpods: AirPods,
  lipbalm: LipBalm,
  pouch: Pouch,
};

export default function ProductPreview({
  productId,
  body,
  accent,
  handle,
  stitch = "single",
  text = "",
  className = "",
}) {
  const Shape = SHAPES[productId] || Bag;
  const texId = `tex-${productId}-${stitch}`;
  const filterId = `yarn-${productId}`;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={`Live preview of a custom crochet ${productId} in ${body.name}, ${accent.name}, and ${handle.name}`}
    >
      <StitchDefs id={texId} stitch={stitch} tone="rgba(0,0,0,0.30)" />
      <YarnFilter id={filterId} />

      <g>
        <Shape
          body={body}
          accent={accent}
          handle={handle}
          tex={`url(#${texId})`}
          sheen={`url(#${filterId}-sheen)`}
        />
      </g>

      {text ? (
        <text
          x="200"
          y="388"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="26"
          fontWeight="700"
          fill={accent.hex}
          letterSpacing="3"
        >
          {text.slice(0, 12).toUpperCase()}
        </text>
      ) : null}
    </svg>
  );
}
