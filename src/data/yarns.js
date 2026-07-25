/**
 * Yarn palette + product blueprints powering the Design Studio.
 *
 * Every colour here is a yarn Thyra World actually works with, so a design a
 * customer builds on screen is one that can genuinely be crocheted. Keep this
 * list in sync with what's on the shelf — if a colourway runs out, drop it here
 * and it disappears from the studio everywhere at once.
 */

export const yarnColors = [
  { id: "coral", name: "Coral Blush", hex: "#FF6B4A", shadow: "#D4472A" },
  { id: "ember", name: "Ember Rose", hex: "#FF4D6D", shadow: "#CC2C4A" },
  { id: "rose", name: "Soft Rose", hex: "#FF8FA3", shadow: "#D96A80" },
  { id: "amber", name: "Amber Glow", hex: "#FFB627", shadow: "#D18F0F" },
  { id: "mustard", name: "Warm Mustard", hex: "#E0A320", shadow: "#B07E11" },
  { id: "terracotta", name: "Terracotta", hex: "#C96F4A", shadow: "#9B5233" },
  { id: "sage", name: "Sage Mist", hex: "#4ECDC4", shadow: "#2FA49C" },
  { id: "mint", name: "Fresh Mint", hex: "#6EE7B7", shadow: "#3FBE8E" },
  { id: "forest", name: "Deep Forest", hex: "#3F7D5C", shadow: "#2A5A41" },
  { id: "sky", name: "Clear Sky", hex: "#60A5FA", shadow: "#3B7FD1" },
  { id: "denim", name: "Denim Blue", hex: "#4A6FA5", shadow: "#334F7A" },
  { id: "violet", name: "Violet Dusk", hex: "#A78BFA", shadow: "#7C5FD6" },
  { id: "lavender", name: "Lavender", hex: "#C4B5FD", shadow: "#9887DB" },
  { id: "cream", name: "Ivory Cream", hex: "#F4E9D8", shadow: "#CDBFA8" },
  { id: "camel", name: "Camel", hex: "#C4A484", shadow: "#9C8065" },
  { id: "charcoal", name: "Charcoal", hex: "#3A404E", shadow: "#252A35" },
];

export const yarnById = Object.fromEntries(yarnColors.map((y) => [y.id, y]));

export function getYarn(id, fallback = "coral") {
  return yarnById[id] || yarnById[fallback];
}

/** Stitch styles change the texture overlay on the live preview. */
export const stitchStyles = [
  { id: "single", name: "Single Crochet", note: "Dense, sturdy, holds shape well" },
  { id: "granny", name: "Granny Square", note: "Classic open motif, lots of character" },
  { id: "ribbed", name: "Ribbed", note: "Raised vertical texture, stretchy" },
  { id: "shell", name: "Shell Stitch", note: "Soft scalloped fans, decorative" },
];

/**
 * Each blueprint drives the studio: which colour zones exist, which sizes are
 * offered, and how long it takes to make.
 */
export const productBlueprints = [
  {
    id: "bag",
    name: "Bag",
    tagline: "Totes, market bags, and everyday carriers",
    zones: ["body", "accent", "handle"],
    sizes: [
      { id: "mini", name: "Mini", note: "20 × 18 cm" },
      { id: "regular", name: "Regular", note: "30 × 28 cm" },
      { id: "large", name: "Large", note: "40 × 36 cm" },
    ],
    leadDays: 10,
    allowsText: true,
  },
  {
    id: "basket",
    name: "Basket",
    tagline: "Desk organisers, hampers, and storage",
    zones: ["body", "accent", "handle"],
    sizes: [
      { id: "small", name: "Small", note: "15 cm across" },
      { id: "medium", name: "Medium", note: "22 cm across" },
      { id: "large", name: "Large", note: "30 cm across" },
    ],
    leadDays: 8,
    allowsText: false,
  },
  {
    id: "coaster",
    name: "Coaster",
    tagline: "Sets for tea, coffee, and gifting",
    zones: ["body", "accent", "handle"],
    zoneLabels: { handle: "Edging" },
    sizes: [
      { id: "set2", name: "Set of 2", note: "10 cm each" },
      { id: "set4", name: "Set of 4", note: "10 cm each" },
      { id: "set6", name: "Set of 6", note: "10 cm each" },
    ],
    leadDays: 5,
    allowsText: false,
  },
  {
    id: "airpods",
    name: "AirPod Case",
    tagline: "Snug covers with a clip loop",
    zones: ["body", "accent", "handle"],
    zoneLabels: { accent: "Lid", handle: "Loop" },
    sizes: [
      { id: "gen", name: "AirPods 1/2/3", note: "Standard case" },
      { id: "pro", name: "AirPods Pro", note: "Pro case" },
    ],
    leadDays: 5,
    allowsText: true,
  },
  {
    id: "lipbalm",
    name: "Lip Balm Holder",
    tagline: "Tiny keychain holders that clip anywhere",
    zones: ["body", "accent", "handle"],
    zoneLabels: { accent: "Cap", handle: "Cord" },
    sizes: [{ id: "one", name: "One size", note: "Fits standard tubes" }],
    leadDays: 4,
    allowsText: false,
  },
  {
    id: "pouch",
    name: "Pouch",
    tagline: "Makeup, stationery, and everyday bits",
    zones: ["body", "accent", "handle"],
    zoneLabels: { accent: "Zip band", handle: "Tassel" },
    sizes: [
      { id: "small", name: "Small", note: "14 × 10 cm" },
      { id: "medium", name: "Medium", note: "20 × 14 cm" },
      { id: "large", name: "Large", note: "26 × 18 cm" },
    ],
    leadDays: 6,
    allowsText: true,
  },
];

export const blueprintById = Object.fromEntries(
  productBlueprints.map((b) => [b.id, b])
);

export const defaultZoneLabels = {
  body: "Main colour",
  accent: "Accent",
  handle: "Handle",
};

export function zoneLabel(blueprint, zone) {
  return blueprint.zoneLabels?.[zone] || defaultZoneLabels[zone] || zone;
}

/* ------------------------------------------------------------------ *
 * Photo recolouring
 *
 * The studio can preview a different yarn on a real product photograph.
 * It works by rotating hue rather than painting over the image, which matters:
 * hue-rotate leaves near-grey pixels almost untouched, so the white sheets and
 * cream walls these bags were shot against stay put while the bag itself
 * shifts. The trade-off is that a bag already made in a neutral yarn (black,
 * cream, camel) has no hue to rotate — `canRecolourPhoto` flags those so the UI
 * can say so honestly instead of showing a preview that does nothing.
 * ------------------------------------------------------------------ */

export function hexToHsl(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;

  if (d === 0) return { h: 0, s: 0, l };

  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;

  return { h: h * 360, s, l };
}

/**
 * True when the source yarn has enough chroma for a hue shift to actually read.
 *
 * The lightness band matters as much as saturation: HSL reports a pale cream as
 * highly saturated, but rotating its hue barely changes anything on screen. So
 * near-white and near-black yarns are both excluded.
 */
export function canRecolourPhoto(yarnId) {
  const { s, l } = hexToHsl(getYarn(yarnId).hex);
  return s >= 0.2 && l >= 0.25 && l <= 0.86;
}

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/** CSS filter that shifts a photo from one yarn colourway toward another. */
export function photoFilter(fromYarnId, toYarnId) {
  const from = hexToHsl(getYarn(fromYarnId).hex);
  const to = hexToHsl(getYarn(toYarnId).hex);

  if (fromYarnId === toYarnId) return "none";

  let hue = to.h - from.h;
  if (hue > 180) hue -= 360;
  if (hue < -180) hue += 360;

  // Ratios rather than absolutes — the photo already carries its own shading.
  const sat = clamp(from.s < 0.05 ? 1 : to.s / from.s, 0.35, 2.2);
  const bright = clamp(from.l < 0.05 ? 1 : 0.72 + (to.l / from.l) * 0.28, 0.7, 1.35);

  return `hue-rotate(${hue.toFixed(1)}deg) saturate(${sat.toFixed(2)}) brightness(${bright.toFixed(2)})`;
}

