/**
 * Cartoon likeness of Shubham, drawn from her reference photos.
 *
 * Style notes: chibi-ish proportions (head is about a quarter of the figure),
 * oversized sparkling eyes, and hair with actual lock separation and flyaways —
 * those three things are what make it read as cute rather than as clipart. The
 * pose is deliberately asymmetric, with a hip tilt and one arm higher than the
 * other, so it feels mid-motion instead of posed.
 *
 * From the references: long dark wavy centre-parted hair, sindoor at the
 * parting, warm open smile, black beaded mangalsutra, emerald ring, gold studs,
 * cream oversized V-neck jumper, black shorts, black three-stripe trainers.
 */
export default function ShubhamCharacter({ className = "" }) {
  const SKIN = "#EBB183";
  const SKIN_MID = "#DC9C6C";
  const SKIN_DEEP = "#C2825A";
  const HAIR = "#4A3128";
  const HAIR_DARK = "#38241D";
  const HAIR_HI = "#7A5340";
  const CREAM = "#F6EEE1";
  const CREAM_MID = "#E5D8C4";
  const CREAM_DEEP = "#CFBEA5";

  return (
    <svg
      viewBox="0 0 460 580"
      className={className}
      role="img"
      aria-label="Cartoon illustration of Shubham Salehria juggling yarn, a handmade bag, jewellery, a laptop and a phone"
    >
      <defs>
        <radialGradient id="ch-glow" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ch-hair" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#573A2E" />
          <stop offset="55%" stopColor="#4A3128" />
          <stop offset="100%" stopColor="#38241D" />
        </linearGradient>
        <linearGradient id="ch-knit" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FBF5EB" />
          <stop offset="100%" stopColor="#E9DCC7" />
        </linearGradient>
        <pattern id="ch-stitch" width="13" height="13" patternUnits="userSpaceOnUse">
          <path
            d="M2.5 3.5 L6.5 9 L10.5 3.5"
            fill="none"
            stroke="#C9B79B"
            strokeOpacity="0.5"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </pattern>
        <clipPath id="ch-mouth">
          <path d="M215 158 q15 5 30 0 q-2 17 -15 17 q-13 0 -15 -17 Z" />
        </clipPath>
        <clipPath id="ch-face">
          <path d="M230 50 C 270 50, 293 78, 293 118 C 293 148, 281 168, 260 178 C 248 185, 212 185, 200 178 C 179 168, 167 148, 167 118 C 167 78, 190 50, 230 50 Z" />
        </clipPath>
      </defs>

      <ellipse cx="230" cy="290" rx="228" ry="270" fill="url(#ch-glow)" />

      {/* Motion arcs */}
      <g fill="none" strokeLinecap="round" opacity="0.4">
        <ellipse cx="230" cy="292" rx="196" ry="196" stroke="#FF6B4A" strokeWidth="1.5" strokeDasharray="6 13" />
        <ellipse cx="230" cy="292" rx="158" ry="232" stroke="#A78BFA" strokeWidth="1.3" strokeDasharray="4 15" />
      </g>

      {/* Ground shadow */}
      <ellipse cx="232" cy="534" rx="86" ry="12" fill="#000" opacity="0.35" />

      {/* ============ HAIR — back mass with lock separation ============ */}
      <path
        d="M230 34 C 296 34, 322 84, 318 132
           C 315 172, 326 214, 320 254 C 315 288, 324 316, 314 346
           C 308 330, 296 332, 289 348 C 283 330, 271 334, 265 350
           C 259 306, 270 250, 265 206 C 262 178, 253 156, 246 146
           L 214 146 C 207 156, 198 178, 195 206
           C 190 250, 201 306, 195 350 C 189 334, 177 330, 171 348
           C 164 332, 152 330, 146 346 C 136 316, 145 288, 140 254
           C 134 214, 145 172, 142 132 C 138 84, 164 34, 230 34 Z"
        fill="url(#ch-hair)"
      />
      {/* Lock separation lines */}
      <g stroke={HAIR_DARK} strokeWidth="3.2" fill="none" strokeLinecap="round" opacity="0.85">
        <path d="M168 176 C 160 226, 168 280, 162 330" />
        <path d="M292 176 C 300 226, 292 280, 298 330" />
      </g>
      <g stroke={HAIR_HI} strokeWidth="2.6" fill="none" strokeLinecap="round" opacity="0.75">
        <path d="M156 168 C 149 216, 156 268, 151 318" />
        <path d="M304 168 C 311 216, 304 268, 309 318" />
      </g>

      {/* ============ FACE ============ */}
      {/* Ears */}
      <ellipse cx="168" cy="126" rx="10" ry="14" fill={SKIN_MID} />
      <ellipse cx="292" cy="126" rx="10" ry="14" fill={SKIN_MID} />
      <circle cx="167" cy="136" r="4.2" fill="#FFC94D" />
      <circle cx="293" cy="136" r="4.2" fill="#FFC94D" />

      <path
        d="M230 50 C 270 50, 293 78, 293 118 C 293 148, 281 168, 260 178
           C 248 185, 212 185, 200 178 C 179 168, 167 148, 167 118 C 167 78, 190 50, 230 50 Z"
        fill={SKIN}
      />
      {/* Soft form shadow down one side */}
      <g clipPath="url(#ch-face)">
        <ellipse cx="300" cy="120" rx="46" ry="80" fill={SKIN_MID} opacity="0.5" />
      </g>

      {/* Fringe — centre parted, sweeping both ways */}
      <path
        d="M167 122 C 168 74, 192 44, 230 44 C 268 44, 292 74, 293 122
           C 287 96, 272 80, 248 82 C 240 74, 234 64, 230 54
           C 225 66, 216 78, 202 84 C 183 92, 171 104, 167 122 Z"
        fill="url(#ch-hair)"
      />

      {/* Sindoor at the parting */}
      <path d="M227.5 56 h5 v20 h-5 Z" fill="#D8282C" />
      <circle cx="230" cy="80" r="3.4" fill="#D8282C" />

      {/* Brows */}
      <g stroke="#33211A" strokeWidth="5" fill="none" strokeLinecap="round">
        <path d="M190 102 C 198 94, 214 93, 222 99" />
        <path d="M238 99 C 246 93, 262 94, 270 102" />
      </g>

      {/* Big sparkling eyes */}
      <g>
        <ellipse cx="205" cy="128" rx="14" ry="16" fill="#FFFFFF" />
        <ellipse cx="255" cy="128" rx="14" ry="16" fill="#FFFFFF" />
        <circle cx="206" cy="129" r="10.5" fill="#4A2E1E" />
        <circle cx="256" cy="129" r="10.5" fill="#4A2E1E" />
        <circle cx="206" cy="129" r="5.5" fill="#1E120B" />
        <circle cx="256" cy="129" r="5.5" fill="#1E120B" />
        {/* Double highlights make the eyes read as "cute" */}
        <circle cx="210" cy="123" r="4" fill="#FFFFFF" />
        <circle cx="260" cy="123" r="4" fill="#FFFFFF" />
        <circle cx="201" cy="134" r="2" fill="#FFFFFF" opacity="0.85" />
        <circle cx="251" cy="134" r="2" fill="#FFFFFF" opacity="0.85" />
      </g>
      {/* Upper lashes */}
      <g stroke="#2A1A12" strokeWidth="4.2" fill="none" strokeLinecap="round">
        <path d="M192 118 C 198 110, 214 109, 219 116" />
        <path d="M241 116 C 246 109, 262 110, 268 118" />
      </g>
      <g stroke="#2A1A12" strokeWidth="2.6" fill="none" strokeLinecap="round">
        <path d="M191 116 l-6 -5" />
        <path d="M269 116 l6 -5" />
      </g>

      {/* Nose */}
      <path d="M228 142 q-5 8 3 11" stroke={SKIN_DEEP} strokeWidth="2.8" fill="none" strokeLinecap="round" />

      {/* Open smile */}
      <path d="M215 158 q15 5 30 0 q-2 17 -15 17 q-13 0 -15 -17 Z" fill="#8E3B47" />
      <g clipPath="url(#ch-mouth)">
        <rect x="212" y="155" width="38" height="9" rx="3" fill="#FFFFFF" />
        <ellipse cx="230" cy="180" rx="12" ry="7" fill="#CE5F6C" />
      </g>
      <ellipse cx="186" cy="148" rx="11" ry="6.5" fill="#FF7A5C" opacity="0.35" />
      <ellipse cx="274" cy="148" rx="11" ry="6.5" fill="#FF7A5C" opacity="0.35" />

      {/* Neck */}
      <path d="M212 176 h36 v22 q-18 12 -36 0 Z" fill={SKIN_MID} />
      <path d="M212 176 h36 v9 q-18 10 -36 0 Z" fill={SKIN_DEEP} opacity="0.55" />

      {/* ============ LEGS — slight contrapposto ============ */}
      <path d="M206 344 C 202 392, 205 440, 210 478 l-2 26 h26 l2 -26 C 238 440, 236 392, 234 344 Z" fill={SKIN} />
      <path d="M244 344 C 246 392, 250 440, 256 478 l4 26 h26 l-4 -26 C 274 440, 268 392, 264 344 Z" fill={SKIN} />
      <path d="M244 344 C 246 392, 250 440, 256 478 l4 26 h10 l-4 -26 C 258 440, 252 392, 250 344 Z" fill={SKIN_MID} opacity="0.45" />

      {/* Black shorts */}
      <path d="M196 322 h72 l8 32 q2 12 -10 12 h-22 l-6 -20 -6 20 h-22 q-12 0 -10 -12 Z" fill="#22252D" />
      <path d="M196 322 h72 l2 8 h-76 Z" fill="#2E323C" />

      {/* Trainers with three stripes */}
      <g>
        <path d="M202 500 h30 v18 q0 12 -13 12 h-28 q-9 0 -9 -9 q0 -13 15 -15 Z" fill="#1A1D24" />
        <g stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round">
          <path d="M210 506 l-7 12 M217 506 l-7 12 M224 506 l-7 12" />
        </g>
        <path d="M182 521 h50 v6 q0 5 -7 5 h-37 q-7 0 -7 -6 Z" fill="#F3EFE7" />
      </g>
      <g>
        <path d="M258 500 h30 v15 q16 2 16 15 q0 9 -9 9 h-28 q-13 0 -13 -12 Z" fill="#1A1D24" />
        <g stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round">
          <path d="M268 506 l7 12 M275 506 l7 12 M282 506 l7 12" />
        </g>
        <path d="M256 521 h50 v5 q0 6 -7 6 h-37 q-7 0 -7 -5 Z" fill="#F3EFE7" />
      </g>

      {/* ============ OVERSIZED CREAM JUMPER ============ */}
      <path
        d="M196 204 C 180 212, 170 232, 168 256 L 160 322 C 158 340, 168 350, 184 350
           L 276 350 C 292 350, 302 340, 300 322 L 292 256 C 290 232, 280 212, 264 204
           C 250 222, 210 222, 196 204 Z"
        fill="url(#ch-knit)"
      />
      <path
        d="M196 204 C 180 212, 170 232, 168 256 L 160 322 C 158 340, 168 350, 184 350
           L 276 350 C 292 350, 302 340, 300 322 L 292 256 C 290 232, 280 212, 264 204
           C 250 222, 210 222, 196 204 Z"
        fill="url(#ch-stitch)"
      />
      {/* Drape shadow on the right side */}
      <path
        d="M268 208 C 280 216, 288 234, 290 256 L 298 322 C 300 340, 290 350, 276 350
           L 252 350 C 268 330, 272 268, 268 208 Z"
        fill={CREAM_MID}
        opacity="0.55"
      />
      {/* Ribbed hem */}
      <path d="M159 330 h142 l-1 -8 H160 Z" fill={CREAM_DEEP} opacity="0.7" />
      <path d="M160 334 L 300 334 l 0 -6 L 160 328 Z" fill={CREAM_DEEP} opacity="0.5" />

      {/* V-neck + mangalsutra */}
      <path d="M206 206 L 230 250 L 254 206 C 244 220, 216 220, 206 206 Z" fill={SKIN_MID} />
      <path d="M206 206 L 230 250 L 254 206" stroke={CREAM_DEEP} strokeWidth="6" fill="none" strokeLinejoin="round" />
      <path d="M211 209 q19 30 38 0" stroke="#191A20" strokeWidth="3.6" fill="none" strokeLinecap="round" />
      <path d="M211 209 q19 30 38 0" stroke="#454A57" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeDasharray="1.4 4" />
      <circle cx="230" cy="233" r="5.2" fill="#FFC94D" />

      {/* ============ ARMS — asymmetric, mid-juggle ============ */}
      {/* Her right arm (viewer left) up high */}
      <path d="M192 226 C 162 208, 140 172, 134 132" stroke={SKIN} strokeWidth="21" fill="none" strokeLinecap="round" />
      <path d="M194 222 C 174 212, 160 194, 152 174" stroke={CREAM} strokeWidth="29" fill="none" strokeLinecap="round" />
      <path d="M194 222 C 174 212, 160 194, 152 174" stroke="url(#ch-stitch)" strokeWidth="29" fill="none" strokeLinecap="round" />

      {/* Her left arm (viewer right) raised out wide */}
      <path d="M268 224 C 306 228, 336 210, 352 170" stroke={SKIN} strokeWidth="21" fill="none" strokeLinecap="round" />
      <path d="M266 220 C 296 224, 318 212, 330 190" stroke={CREAM} strokeWidth="29" fill="none" strokeLinecap="round" />
      <path d="M266 220 C 296 224, 318 212, 330 190" stroke="url(#ch-stitch)" strokeWidth="29" fill="none" strokeLinecap="round" />

      {/* Cuff ribbing */}
      <g stroke={CREAM_DEEP} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8">
        <path d="M147 180 q12 -7 20 4" />
        <path d="M327 197 q-13 -6 -18 4" />
      </g>

      {/* Hands */}
      <circle cx="132" cy="126" r="13.5" fill={SKIN} />
      <circle cx="356" cy="164" r="13.5" fill={SKIN} />
      {/* Emerald ring */}
      <rect x="350" y="156" width="9" height="8" rx="2.5" fill="#1F7A5C" stroke="#FFC94D" strokeWidth="1.8" />
      {/* Gold bangles */}
      <g stroke="#FFC94D" strokeWidth="3.6" fill="none" strokeLinecap="round">
        <path d="M143 150 q10 -7 17 3" />
        <path d="M149 160 q10 -7 17 3" />
        <path d="M341 190 q-13 -3 -15 8" />
        <path d="M336 199 q-13 -3 -15 8" />
      </g>

      {/* ============ JUGGLED OBJECTS ============ */}

      {/* Yarn ball — coral, being tossed */}
      <g transform="rotate(-12 78 76)">
        <circle cx="78" cy="78" r="34" fill="#D4472A" />
        <circle cx="78" cy="75" r="32" fill="#FF6B4A" />
        <g stroke="#C63F24" strokeWidth="2.6" fill="none" strokeLinecap="round">
          <path d="M50 64 q28 21 55 4" />
          <path d="M48 84 q32 17 58 -6" />
          <path d="M60 48 q-6 32 13 53" />
          <path d="M91 46 q9 30 -8 53" />
        </g>
        <path d="M106 90 q22 12 26 34" stroke="#FF6B4A" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      </g>

      {/* Yarn ball — sage */}
      <g>
        <circle cx="402" cy="330" r="26" fill="#2FA49C" />
        <circle cx="402" cy="327" r="24" fill="#4ECDC4" />
        <g stroke="#2A968F" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <path cx="0" d="M381 318 q21 16 41 3" />
          <path d="M380 336 q24 12 44 -5" />
          <path d="M391 306 q-5 24 10 39" />
        </g>
      </g>

      {/* Handmade bag */}
      <g transform="rotate(8 388 92)">
        <path d="M366 84 q0 -25 21 -25 t21 25" stroke="#C4A484" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M353 84 h69 l-7 60 q-1 10 -11 10 h-34 q-10 0 -11 -10 Z" fill="#D18F0F" />
        <path d="M353 84 h69 l-7 56 q-1 10 -11 10 h-34 q-10 0 -11 -10 Z" fill="#FFB627" />
        <path d="M353 84 h69 l-7 56 q-1 10 -11 10 h-34 q-10 0 -11 -10 Z" fill="url(#ch-stitch)" />
        <rect x="355" y="78" width="65" height="12" rx="6" fill="#F6EEE1" />
      </g>

      {/* Laptop */}
      <g transform="rotate(-6 84 320)">
        <path d="M36 288 h92 v58 h-92 Z" rx="5" fill="#252A35" />
        <rect x="42" y="294" width="80" height="46" rx="3" fill="#4ECDC4" opacity="0.85" />
        <g stroke="#0B0D12" strokeWidth="2.4" opacity="0.45" strokeLinecap="round">
          <path d="M50 305 h46 M50 315 h60 M50 325 h34" />
        </g>
        <path d="M24 346 h116 q6 0 6 7 t-6 7 H24 q-6 0 -6 -7 t6 -7 Z" fill="#3A404E" />
      </g>

      {/* Phone */}
      <g transform="rotate(18 340 440)">
        <rect x="318" y="400" width="44" height="80" rx="11" fill="#252A35" />
        <rect x="323" y="407" width="34" height="62" rx="5" fill="#A78BFA" opacity="0.9" />
        <circle cx="340" cy="475" r="3" fill="#5B6274" />
        <path d="M340 430 q-7 -9 -12 -3 q-5 5 2 11 l10 11 l10 -11 q7 -6 2 -11 q-5 -6 -12 3 Z" fill="#FF4D6D" />
      </g>

      {/* Jewellery — stacked bangles */}
      <g fill="none" strokeLinecap="round">
        <ellipse cx="118" cy="428" rx="32" ry="11" stroke="#FFC94D" strokeWidth="6" />
        <ellipse cx="130" cy="446" rx="28" ry="9.5" stroke="#E0A320" strokeWidth="5" />
        <circle cx="86" cy="428" r="4" fill="#FFC94D" stroke="none" />
      </g>

      {/* Crochet hook in the raised hand */}
      <g transform="rotate(24 132 126)">
        <rect x="129" y="88" width="6" height="44" rx="3" fill="#C4A484" />
        <path d="M132 88 q9 0 9 8 q0 7 -7 7" stroke="#C4A484" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>

      {/* Loose yarn strand tying it together */}
      <path
        d="M132 116 q56 42 2 112 q-48 66 40 94 q78 26 146 -14 q58 -34 22 -94"
        stroke="#A78BFA"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.42"
        strokeDasharray="6 9"
      />
    </svg>
  );
}
