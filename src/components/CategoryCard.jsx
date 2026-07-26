import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// A fixed candy accent per position so the grid reads as a colour spectrum.
const accents = ["#FF4D8D", "#7C3AED", "#06D6A0", "#FFD60A", "#4CC9F0", "#FF7A5C"];

export default function CategoryCard({ category, index = 0 }) {
  const accent = accents[index % accents.length];

  return (
    <Link
      to={`/products?category=${encodeURIComponent(category)}`}
      className="group flex items-center justify-between gap-2 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
      aria-label={`Explore ${category}`}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full transition group-hover:scale-125"
          style={{ background: accent }}
        />
        <span className="truncate text-[13px] font-bold text-ink-900">{category}</span>
      </span>
      <ArrowRight
        aria-hidden="true"
        size={14}
        className="shrink-0 text-ink-300 transition group-hover:translate-x-1"
      />
    </Link>
  );
}
