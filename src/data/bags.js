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
    photos: shots("silver-sequin-chain-bag", 4),
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

  /* ------------------------------------------------------------------ *
   * Second drop
   * ------------------------------------------------------------------ */

  {
    id: "fringe-top-handle-bag",
    code: "MIRA",
    name: "Fringe Top-Handle Bag",
    tagline: "The signature fringe bag, made in any colourway",
    category: "Bags",
    photos: shots("fringe-top-handle-bag", 5),
    colours: [
      { name: "Hot Pink", yarn: "ember" },
      { name: "Coral", yarn: "coral" },
      { name: "Mint", yarn: "mint" },
      { name: "Navy", yarn: "denim" },
    ],
    description:
      "Our most-requested shape — a chunky top-handle bag with a deep fringe along the lower edge that swings as you walk. The photos show four of the colourways we've made it in; because it's worked to order, you can have it in any yarn we stock.",
    details: [
      "Chunky top handle, crocheted in one piece",
      "Deep hand-cut fringe along the lower edge",
      "Made to order in any colourway",
      "Sits neatly under the arm",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "rainbow-fringe-tote",
    code: "JUNO",
    name: "Rainbow Fringe Tote",
    tagline: "Bigger, brighter, with twin braided handles",
    category: "Bags",
    photos: shots("rainbow-fringe-tote", 2),
    colours: [
      { name: "Rainbow", yarn: "coral" },
      { name: "Turquoise", yarn: "sage" },
      { name: "Butter", yarn: "amber" },
    ],
    description:
      "The roomier cousin of the fringe bag — worked in multicoloured yarn with two braided handles instead of one, and ribbon ties at the corners. Big enough for a book, a water bottle, and everything else.",
    details: [
      "Twin braided handles",
      "Multicoloured striped body",
      "Ribbon ties at the corners",
      "Roomy tote proportions",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "chunky-ribbed-shoulder-bag",
    code: "CLEO",
    name: "Chunky Ribbed Shoulder Bag",
    tagline: "Deep ribbing and a soft slouch, in six colourways",
    category: "Bags",
    photos: shots("chunky-ribbed-shoulder-bag", 3),
    colours: [
      { name: "Chocolate", yarn: "terracotta" },
      { name: "Sky Blue", yarn: "sky" },
      { name: "Butter", yarn: "amber" },
      { name: "Pink", yarn: "rose" },
    ],
    description:
      "A generous shoulder bag in deep vertical ribbing that folds into a soft slouch when you carry it. The chunky yarn gives it real presence, and the wide strap sits comfortably even when it's full.",
    details: [
      "Deep vertical rib in chunky yarn",
      "Wide, comfortable shoulder strap",
      "Drawstring ties at the sides",
      "Made in a range of colourways",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "structured-ribbed-handbag",
    code: "ONYX",
    name: "Structured Ribbed Handbag",
    tagline: "Black ribbing with a top handle and a long cord",
    category: "Bags",
    photos: shots("structured-ribbed-handbag", 1),
    colours: [{ name: "Black", yarn: "charcoal" }],
    description:
      "The smartest piece in the collection — a properly structured handbag with a braided top handle and a detachable crossbody cord. Holds its shape rather than slouching, which makes it the one to reach for when you want to look put together.",
    details: [
      "Structured body that holds its shape",
      "Braided top handle",
      "Detachable crossbody cord",
      "Vertical ribbed stitch",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "bobble-chain-bag",
    code: "ODA",
    name: "Bobble Chain Bag",
    tagline: "Puffy bobble stitch on a gold chain",
    category: "Bags",
    photos: shots("bobble-chain-bag", 1),
    colours: [{ name: "Sand", yarn: "camel" }],
    description:
      "Worked entirely in bobble stitch, which gives it a soft quilted surface you want to press. Hung on a gold chain so it dresses up easily — it reads far more expensive than a crochet bag has any right to.",
    details: [
      "All-over bobble stitch",
      "Gold chain shoulder strap",
      "Soft, quilted-looking surface",
      "Neat evening proportions",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "barrel-bowler-bag",
    code: "RIO",
    name: "Barrel Bowler Bag",
    tagline: "A long structured barrel in chocolate brown",
    category: "Bags",
    photos: shots("barrel-bowler-bag", 1),
    colours: [{ name: "Chocolate", yarn: "terracotta" }],
    description:
      "A long barrel-shaped bowler with twin top handles and a flat base, so it stands up on its own. The tight even stitch keeps the shape crisp from end to end.",
    details: [
      "Barrel silhouette with a flat base",
      "Twin short top handles",
      "Stands up on its own",
      "Tight, even stitch throughout",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "chain-strap-top-handle",
    code: "MAYA",
    name: "Chain Strap Top-Handle",
    tagline: "Marled body, chunky handle, silver chain",
    category: "Bags",
    photos: shots("chain-strap-top-handle", 1),
    colours: [
      { name: "Chocolate", yarn: "terracotta" },
      { name: "Dove Grey", yarn: "charcoal" },
    ],
    description:
      "A neat rectangular bag in marled yarn, finished with a chunky crocheted top handle and a chunky silver chain you can clip on for a longer drop. Shown here in chocolate and dove grey.",
    details: [
      "Marled two-tone yarn",
      "Chunky crocheted top handle",
      "Detachable silver chain strap",
      "Long cord strap included",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "smoke-fringe-crossbody",
    code: "ASH",
    name: "Smoke Fringe Crossbody",
    tagline: "Charcoal marl with a long swinging fringe",
    category: "Bags",
    photos: shots("smoke-fringe-crossbody", 1),
    colours: [{ name: "Smoke", yarn: "charcoal" }],
    description:
      "A darker take on the fringe bag — charcoal marled yarn with an extra-long fringe and a thick braided strap worn across the body. Quietly dramatic, and it goes with everything.",
    details: [
      "Charcoal marled yarn",
      "Extra-long fringe",
      "Thick braided crossbody strap",
      "Flat, easy-to-wear body",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "ruched-handle-bag",
    code: "VELA",
    name: "Ruched Handle Bag",
    tagline: "Burgundy and pale blue with a gathered handle",
    category: "Bags",
    photos: shots("ruched-handle-bag", 1),
    colours: [
      { name: "Burgundy", yarn: "ember" },
      { name: "Pale Blue", yarn: "sky" },
    ],
    description:
      "The handle is the detail here — gathered and ruched so it sits soft in the hand rather than rigid. The body is worked in a two-tone stitch that shows the pale blue through the burgundy, with fringe ties at the base.",
    details: [
      "Gathered, ruched top handle",
      "Two-tone stitch work",
      "Fringe ties along the base",
      "Compact hand-held size",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "striped-mini-crossbody",
    code: "KAI",
    name: "Striped Mini Crossbody",
    tagline: "Blue and white marl with a bright orange trim",
    category: "Bags",
    photos: shots("striped-mini-crossbody", 1),
    colours: [
      { name: "Denim Blue", yarn: "denim" },
      { name: "Orange", yarn: "coral" },
    ],
    description:
      "A small crossbody in blue and white marled yarn, edged in a bright orange that lifts the whole thing. The strap is crocheted in the same trim colour and clips on with rings.",
    details: [
      "Blue and white marled body",
      "Contrast orange trim and strap",
      "Ring-clip detachable strap",
      "Phone-and-cards size",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "periwinkle-drawstring-bag",
    code: "WREN",
    name: "Periwinkle Drawstring Bag",
    tagline: "Soft blue with an open weave and tassel ties",
    category: "Bags",
    photos: shots("periwinkle-drawstring-bag", 1),
    colours: [{ name: "Periwinkle", yarn: "lavender" }],
    description:
      "An airy open-weave bag in soft periwinkle with long tassel ties that draw the top closed. Lighter and more delicate than the rest of the collection — lovely for summer.",
    details: [
      "Open weave, light and airy",
      "Long tassel drawstring ties",
      "Soft unstructured body",
      "Integrated top handle",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "butter-mini-top-handle",
    code: "PIPA",
    name: "Butter Mini Top-Handle",
    tagline: "Little butter-yellow bags with neat top handles",
    category: "Bags",
    photos: shots("butter-mini-top-handle", 1),
    colours: [
      { name: "Butter Yellow", yarn: "amber" },
      { name: "Ivory", yarn: "cream" },
    ],
    description:
      "A trio of small top-handle bags in butter yellow and ivory, worked in a smooth even stitch with no fringe or fuss. The mini is just big enough for a phone and a card holder.",
    details: [
      "Smooth, even stitch — no fringe",
      "Neat integrated top handle",
      "Available in two sizes",
      "Butter yellow or ivory",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "rosette-mini-bag",
    code: "ROSA",
    name: "Rosette Mini Bag",
    tagline: "Blush ombré with a crochet rosette and bow",
    category: "Bags",
    photos: shots("rosette-mini-bag", 1),
    colours: [
      { name: "Magenta", yarn: "ember" },
      { name: "Blush Pink", yarn: "rose" },
    ],
    description:
      "A little scalloped bag that fades from magenta down to blush, finished with a hand-crocheted rosette and a ribbon bow at the handle. The sweetest thing we make.",
    details: [
      "Ombré magenta to blush",
      "Scalloped lower edge",
      "Hand-crocheted rosette",
      "Ribbon bow at the handle",
    ],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
];

export const bagById = Object.fromEntries(bags.map((b) => [b.id, b]));
