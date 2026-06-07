import { ArrowRight, BookOpen, Coffee, Gift, Heart, Ribbon, ShoppingBag, Sparkles } from "lucide-react";
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

export default function CategoryCard({ category }) {
  const Icon = iconMap[category] || Sparkles;
  const to = category === "E-books" ? "/ebooks" : `/products?category=${encodeURIComponent(category)}`;

  return (
    <Link
      to={to}
      className="group flex min-h-[3.25rem] items-center gap-2 rounded-full border border-peach-100 bg-white px-3 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blush-200 hover:bg-peach-50 hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blush-200 sm:px-3.5"
      aria-label={`Explore ${category}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-peach-100 text-blush-500 transition group-hover:scale-105">
        <Icon aria-hidden="true" size={16} />
      </span>
      <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
        <span className="truncate text-sm font-bold text-clay-700">{category}</span>
        <ArrowRight
          aria-hidden="true"
          className="text-blush-400 transition group-hover:translate-x-1"
          size={14}
        />
      </span>
    </Link>
  );
}
