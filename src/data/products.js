import { instagramProfile } from "./site.js";
import { bags } from "./bags.js";

export { bags, bagById } from "./bags.js";

// Contact details live in site.js now — re-exported so existing imports keep working.
export {
  instagramProfile,
  shubhamInstagramProfile,
  whatsappNumber,
  whatsappBaseUrl,
  contactEmail,
  createWhatsAppLink,
} from "./site.js";

export const productCategories = [
  "Bags",
  "Baskets",
  "Coasters",
  "Mug Cozies",
  "Scrunchies",
  "Kumihimo",
  "AirPod Cases",
  "Headbands",
  "Lip Balm Holders",
  "Bookmarks",
  "Pouches",
];

export const featuredCategories = [...productCategories, "E-books"];

/**
 * `photo` is the real product photograph and `image` is the illustrated
 * fallback. Components prefer `photo` when it's set, so adding real photography
 * later is a one-line change per product — drop the file into
 * public/images/bags/ and fill in the path. Nothing else needs to move.
 */
export const products = [
  // Real photographed bags come first — they're the strongest thing we have.
  ...bags,
  {
    id: "woven-desk-basket",
    name: "Woven Desk Basket",
    category: "Baskets",
    description:
      "A warm little organiser for stationery, skincare, craft supplies, or tiny treasures.",
    image: "/images/product-baskets.svg",
    photo: null,
    colourways: ["cream", "camel", "sage"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "gift-basket",
    name: "Custom Gift Basket",
    category: "Baskets",
    description:
      "A soft handmade basket that can be styled for hampers, festivals, and special days.",
    image: "/images/product-baskets.svg",
    photo: null,
    colourways: ["rose", "amber", "cream"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "blush-coaster-set",
    name: "Blush Coaster Set",
    category: "Coasters",
    description:
      "Pretty handmade coasters that bring a sweet handmade detail to tea and coffee time.",
    image: "/images/product-coasters.svg",
    photo: null,
    colourways: ["rose", "cream", "coral"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "floral-coaster-pair",
    name: "Floral Coaster Pair",
    category: "Coasters",
    description:
      "A soft floral-inspired pair for desks, bedside tables, and thoughtful gifting.",
    image: "/images/product-coasters.svg",
    photo: null,
    colourways: ["sage", "cream", "amber"],
    instagramUrl: instagramProfile,
    isCustomisable: false,
    isHandmade: true,
  },
  {
    id: "cosy-mug-sleeve",
    name: "Cosy Mug Sleeve",
    category: "Mug Cozies",
    description:
      "A snug handmade mug cozy that makes warm drinks feel a little more special.",
    image: "/images/product-cozies.svg",
    photo: null,
    colourways: ["terracotta", "cream", "forest"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "button-mug-cozy",
    name: "Button Mug Cozy",
    category: "Mug Cozies",
    description:
      "A charming cozy sleeve with a handmade finish and colour choices for your mug.",
    image: "/images/product-cozies.svg",
    photo: null,
    colourways: ["mustard", "camel", "charcoal"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "soft-scrunchie-duo",
    name: "Soft Scrunchie Duo",
    category: "Scrunchies",
    description:
      "Gentle, pretty scrunchies for everyday wear, gifting, and matching outfits.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["rose", "lavender", "cream"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "kumihimo-charm-cord",
    name: "Kumihimo Charm Cord",
    category: "Kumihimo",
    description:
      "A colourful braided cord for charms, keys, bags, bookmarks, or custom styling.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["violet", "sky", "mint"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "airpod-cosy-case",
    name: "AirPod Cosy Case",
    category: "AirPod Cases",
    description:
      "A soft handmade AirPod case cover that adds protection, colour, and personality.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["coral", "cream", "sage"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "everyday-headband",
    name: "Everyday Headband",
    category: "Headbands",
    description:
      "A comfortable handmade headband for soft everyday styling and easy gifting.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["cream", "rose", "camel"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "lip-balm-holder",
    name: "Lip Balm Holder",
    category: "Lip Balm Holders",
    description:
      "A tiny handmade holder that keeps lip balm close on bags, keys, and pouches.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["amber", "coral", "mint"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
  {
    id: "flower-bookmark",
    name: "Flower Bookmark",
    category: "Bookmarks",
    description:
      "A sweet handmade bookmark for readers, journals, planners, and bookish gifts.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["rose", "sage", "cream"],
    instagramUrl: instagramProfile,
    isCustomisable: false,
    isHandmade: true,
  },
  {
    id: "soft-zip-pouch",
    name: "Soft Zip Pouch",
    category: "Pouches",
    description:
      "A handmade pouch for makeup, stationery, tech bits, coins, or little essentials.",
    image: "/images/product-accessories.svg",
    photo: null,
    colourways: ["denim", "cream", "coral"],
    instagramUrl: instagramProfile,
    isCustomisable: true,
    isHandmade: true,
  },
];

export const ebooks = [
  {
    id: "coming-soon",
    title: "Coming Soon",
    author: "Shubham Salehria",
    description:
      "A heartfelt book by Shubham Salehria will be available here soon.",
    image: "/images/product-ebooks.svg",
    instagramUrl: "",
  },
  {
    id: "stories-in-progress",
    title: "Stories in Progress",
    author: "Shubham Salehria",
    description:
      "A space for Shubham’s upcoming writing, reflections, and creative storytelling.",
    image: "/images/product-ebooks.svg",
    instagramUrl: "",
  },
  {
    id: "untitled-reflections",
    title: "Untitled Reflections",
    author: "Shubham Salehria",
    description:
      "Personal, emotional, and inspiring writing from the founder of Thyra World.",
    image: "/images/product-ebooks.svg",
    instagramUrl: "",
  },
];
