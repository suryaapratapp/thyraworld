/**
 * Yarn palette — the colours Thyra World actually works with.
 *
 * Used for the colour swatches on product cards and detail pages. Keep this in
 * sync with what's on the shelf; if a colourway runs out, drop it here and it
 * disappears everywhere at once.
 */

export const yarnColors = [
  { id: "coral", name: "Coral Blush", hex: "#FF7A5C" },
  { id: "ember", name: "Ember Rose", hex: "#FF4D6D" },
  { id: "rose", name: "Soft Rose", hex: "#FF8FA3" },
  { id: "amber", name: "Amber Glow", hex: "#FFB627" },
  { id: "mustard", name: "Warm Mustard", hex: "#E0A320" },
  { id: "terracotta", name: "Terracotta", hex: "#C96F4A" },
  { id: "sage", name: "Sage Mist", hex: "#4ECDC4" },
  { id: "mint", name: "Fresh Mint", hex: "#6EE7B7" },
  { id: "forest", name: "Deep Forest", hex: "#3F7D5C" },
  { id: "sky", name: "Clear Sky", hex: "#60A5FA" },
  { id: "denim", name: "Denim Blue", hex: "#4A6FA5" },
  { id: "violet", name: "Violet Dusk", hex: "#A78BFA" },
  { id: "lavender", name: "Lavender", hex: "#C4B5FD" },
  { id: "cream", name: "Ivory Cream", hex: "#F4E9D8" },
  { id: "camel", name: "Camel", hex: "#C4A484" },
  { id: "charcoal", name: "Charcoal", hex: "#3A404E" },
];

export const yarnById = Object.fromEntries(yarnColors.map((y) => [y.id, y]));

export function getYarn(id, fallback = "coral") {
  return yarnById[id] || yarnById[fallback];
}
