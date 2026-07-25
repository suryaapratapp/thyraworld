import {
  ArrowRight,
  BookOpen,
  Coffee,
  Gift,
  Heart,
  Ribbon,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  Bags: ShoppingBag,
  Baskets: Gift,
  Coasters: Sparkles,
  "Mug Cozies": Coffee,
  Scrunchies: Ribbon,
  Kumihimo: Heart,
  "AirPod Cases": Sparkles,
  Headbands: Ribbon,
  "Lip Balm Holders": Heart,
  Bookmarks: BookOpen,
  Pouches: ShoppingBag,
  "E-books": BookOpen,
};

// Each category gets a fixed yarn accent so the grid reads as a colour spectrum.
const accents = [
  "#FF6B4A",
  "#FFB627",
  "#4ECDC4",
  "#A78BFA",
  "#FF8FA3",
  "#6EE7B7",
  "#60A5FA",
  "#FF4D6D",
];

export default function CategoryCard({ category, index = 0 }) {
  const Icon = iconMap[category] || Sparkles;
  const accent = accents[index % accents.length];
  const to =
    category === "E-books"
      ? "/ebooks"
      : `/products?category=${encodeURIComponent(category)}`;

  return (
    <Link
      to={to}
      className="group relative flex min-h-[3.5rem] items-center gap-2.5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
      aria-label={`Explore ${category}`}
    >
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-40"
        style={{ background: accent }}
      />
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition duration-300 group-hover:scale-110"
        style={{ background: `${accent}1F`, color: accent }}
      >
        <Icon aria-hidden="true" size={16} />
      </span>
      <span className="relative flex min-w-0 flex-1 items-center justify-between gap-2">
        <span className="truncate text-[13px] font-bold text-bone-100">{category}</span>
        <ArrowRight
          aria-hidden="true"
          className="shrink-0 text-bone-500 transition group-hover:translate-x-1 group-hover:text-bone-200"
          size={14}
        />
      </span>
    </Link>
  );
}
