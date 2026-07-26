import { instagramProfile } from "./site.js";

/**
 * Real photographed bags.
 *
 * Photos live in public/images/bags/<id>/ — `NN.jpg` is the full gallery shot
 * and `NN-card.jpg` is a 4:5 centre crop used on listing cards. Both are
 * generated together, so adding a shot means dropping in both sizes and
 * appending the number here.
 *
 * No fabricated dimensions here — every bag is made to order, so sizes get
 * confirmed with the customer directly rather than guessed.
 */

const shots = (id, n) =>
  Array.from({ length: n }, (_, i) => ({
    full: `/images/bags/${id}/${String(i + 1).padStart(2, "0")}.jpg`,
    card: `/images/bags/${id}/${String(i + 1).padStart(2, "0")}-card.jpg`,
  }));

export const bags = [
  {
    id: "red-ribbed-shoulder-bag",
    code: "SIA",
    name: "Scarlet Ribbed Shoulder Bag",
    tagline: "Deep red ribbing with a heart charm and pearl bow",
    category: "Bags",
    photos: shots("red-ribbed-shoulder-bag", 4),
    colours: [{ name: "Scarlet Red", yarn: "ember" }],
    description:
      "A generously sized shoulder bag worked in thick ribbed columns that give it real structure and weight. The braided strap is crocheted to sit comfortably over the shoulder, and it comes finished with a matching heart charm, pearl strands, and a lace bow on a detachable clip.",
    details: [
      "Chunky ribbed stitch in soft T-shirt yarn",
      "Braided shoulder strap, crocheted to match",
      "Removable heart charm with pearl and lace trim",
      "Drawstring ties at both lower corners",
      "Roomy enough for daily essentials",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "blossom-stripe-clutch",
    code: "AIRA",
    name: "Blossom Stripe Clutch",
    tagline: "Pink and butter-yellow stripes with a flower garland",
    category: "Bags",
    photos: shots("blossom-stripe-clutch", 4),
    colours: [
      { name: "Blush Pink", yarn: "rose" },
      { name: "Butter Yellow", yarn: "amber" },
    ],
    description:
      "A soft flat clutch striped in blush pink and butter yellow, finished with a garland of hand-crocheted flowers that doubles as the strap. Every petal is worked separately and joined by hand, so no two garlands fall exactly the same way.",
    details: [
      "Alternating pink and yellow stripe work",
      "Hand-crocheted flower garland strap",
      "Ribbon ties at both ends",
      "Flat profile — sits neatly under the arm",
      "Lovely as a gift or occasion bag",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "candy-stripe-chain-bag",
    name: "Candy Stripe Chain Bag",
    tagline: "Red and white marled yarn on an antique chain",
    category: "Bags",
    photos: shots("candy-stripe-chain-bag", 3),
    colours: [
      { name: "Candy Red", yarn: "ember" },
      { name: "Ivory", yarn: "cream" },
    ],
    description:
      "Marled red and white yarn worked into a soft slouchy body, hung from an antique-finish metal chain. The two-tone yarn creates a candy-stripe effect that shifts as the bag moves.",
    details: [
      "Marled red and white T-shirt yarn",
      "Antique-finish metal chain strap",
      "Soft, unlined slouchy body",
      "Chain can be swapped for a crocheted strap on request",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "sunset-knot-bag",
    code: "RUE",
    name: "Sunset Knot Bag",
    tagline: "Orange and cream marl in a Japanese knot shape",
    category: "Bags",
    photos: shots("sunset-knot-bag", 3),
    colours: [
      { name: "Sunset Orange", yarn: "coral" },
      { name: "Ivory", yarn: "cream" },
    ],
    description:
      "A Japanese knot bag in bright orange and cream marled yarn — one loop slips through the other to close it, no zip or button needed. Chunky, quick to grab, and surprisingly roomy for its size.",
    details: [
      "Traditional knot-through-loop closure",
      "Marled orange and cream yarn",
      "Chunky open stitch with lots of texture",
      "Sits at the wrist or over the forearm",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "violet-bloom-bag",
    code: "TAFFY",
    name: "Violet Bloom Top-Handle Bag",
    tagline: "Purple and white houndstooth with a crochet flower",
    category: "Bags",
    photos: shots("violet-bloom-bag", 3),
    colours: [
      { name: "Violet", yarn: "violet" },
      { name: "White", yarn: "cream" },
    ],
    description:
      "A neat top-handle bag worked in a purple and white two-tone stitch that reads almost like houndstooth up close. A single cream crochet flower sits on the front as the finishing detail.",
    details: [
      "Two-tone purple and white stitch work",
      "Structured top handle",
      "Hand-crocheted cream flower appliqué",
      "Compact everyday or occasion size",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "monochrome-bow-bag",
    name: "Monochrome Bow Bag",
    tagline: "Black and white speckle with a crisp white bow",
    category: "Bags",
    photos: shots("monochrome-bow-bag", 4),
    colours: [
      { name: "Black", yarn: "charcoal" },
      { name: "White", yarn: "cream" },
    ],
    description:
      "A shoulder bag in speckled black-and-white yarn with solid black straps and a crisp white bow at the join. The speckled body hides everyday wear well, which makes it an easy one to actually use.",
    details: [
      "Speckled monochrome body with solid black straps",
      "White crochet bow detail at the strap join",
      "Soft, slouchy shoulder shape",
      "Practical everyday size",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "confetti-clutch",
    code: "POPPY",
    name: "Confetti Clutch",
    tagline: "Rainbow flecks on a warm orange base",
    category: "Bags",
    photos: shots("confetti-clutch", 3),
    colours: [
      { name: "Orange", yarn: "coral" },
      { name: "Multicolour", yarn: "amber" },
    ],
    description:
      "A bright clutch worked in multicoloured confetti yarn over a warm orange frame. Every one comes out differently depending on how the colours land — genuinely one of a kind.",
    details: [
      "Multicoloured confetti yarn body",
      "Solid orange top band and base",
      "No two are identical",
      "Flat clutch shape",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "graffiti-laceup-clutch",
    code: "LUMI",
    name: "Graffiti Lace-Up Clutch",
    tagline: "Black body with red and white lacing",
    category: "Bags",
    photos: shots("graffiti-laceup-clutch", 3),
    colours: [
      { name: "Black", yarn: "charcoal" },
      { name: "Red", yarn: "ember" },
      { name: "White", yarn: "cream" },
    ],
    description:
      "The boldest piece in the collection — a black clutch criss-crossed with red and white lacing worked directly into the surface, paired with a braided red-and-white strap and a matching mini pouch.",
    details: [
      "Hand-laced red and white detail over black",
      "Braided two-tone shoulder strap",
      "Comes with a matching mini pouch",
      "Scalloped lower edge",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "bento-black-gold",
    name: "Bento Bag — Black & Gold",
    tagline: "Origami fold with a gold sequin panel",
    category: "Bags",
    photos: shots("bento-black-gold", 2),
    colours: [
      { name: "Black", yarn: "charcoal" },
      { name: "Gold", yarn: "amber" },
    ],
    description:
      "A bento-style bag that folds into a triangle when carried and opens out wide. Worked in black and deep olive with a gold sequin panel running down one side that catches the light as you move.",
    details: [
      "Origami bento fold — flat to carry, wide to open",
      "Gold sequin yarn panel",
      "Single shoulder loop handle",
      "Holds far more than it looks like it will",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "bento-neutral",
    code: "ZURI",
    name: "Bento Bag — Neutral Colourblock",
    tagline: "Cream, taupe, and charcoal in soft blocks",
    category: "Bags",
    photos: shots("bento-neutral", 4),
    colours: [
      { name: "Cream", yarn: "cream" },
      { name: "Taupe", yarn: "camel" },
      { name: "Charcoal", yarn: "charcoal" },
    ],
    description:
      "The same bento fold in a quieter palette — cream, taupe, and charcoal blocked against each other with a subtle metallic thread running through the lighter panel. The easiest one to wear with anything.",
    details: [
      "Colourblocked cream, taupe, and charcoal",
      "Subtle metallic thread in the pale panel",
      "Origami bento fold",
      "Roomy enough for a laptop sleeve or books",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "bento-black-pearl",
    code: "NOVA",
    name: "Bento Bag — Black & Pearl",
    tagline: "Deep black with a pearl-sequin edge",
    category: "Bags",
    photos: shots("bento-black-pearl", 3),
    colours: [
      { name: "Black", yarn: "charcoal" },
      { name: "Pearl", yarn: "cream" },
    ],
    description:
      "Black bento with a pearl sequin panel along the fold — understated until the light hits it. Works as an evening bag without trying too hard.",
    details: [
      "Pearl sequin yarn panel",
      "Dense black stitch body",
      "Origami bento fold",
      "Evening-friendly but everyday sturdy",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "midnight-round-hobo",
    code: "ELVA",
    name: "Midnight Round Hobo",
    tagline: "A clean black crescent with a cut-out handle",
    category: "Bags",
    photos: shots("midnight-round-hobo", 2),
    colours: [{ name: "Black", yarn: "charcoal" }],
    description:
      "A rounded crescent hobo in dense black stitch with an integrated cut-out handle — no straps to fuss with, you just slip it over your shoulder. The simplest shape here and probably the most wearable.",
    details: [
      "Integrated cut-out handle",
      "Dense, hard-wearing stitch",
      "Rounded crescent silhouette",
      "Fits a phone, wallet, sunglasses, and more",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "silver-sequin-chain-bag",
    code: "IZA",
    name: "Silver Sequin Chain Bag",
    tagline: "Sequin shimmer on a delicate chain",
    category: "Bags",
    photos: shots("silver-sequin-chain-bag", 2),
    colours: [
      { name: "Silver", yarn: "cream" },
      { name: "Black", yarn: "charcoal" },
    ],
    description:
      "Worked in silver sequin yarn with a fine chain strap and fringed edges. Pairs with the navy crochet pouch shown alongside it if you'd like the set.",
    details: [
      "Silver sequin yarn throughout",
      "Fine metal chain strap",
      "Fringed lower edge",
      "Can be made as a set with a matching pouch",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "navy-ribbed-crossbody",
    code: "NOX",
    name: "Navy Ribbed Crossbody",
    tagline: "Simple ribbed body on a long cord strap",
    category: "Bags",
    photos: shots("navy-ribbed-crossbody", 1),
    colours: [{ name: "Navy", yarn: "denim" }],
    description:
      "A small ribbed crossbody in deep navy on a long crocheted cord, with tassel ties at the base. Understated and easy — the one you reach for without thinking.",
    details: [
      "Vertical ribbed stitch",
      "Long crocheted cord strap",
      "Tassel ties at the base",
      "Compact crossbody size",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
];

export const bagById = Object.fromEntries(bags.map((b) => [b.id, b]));
