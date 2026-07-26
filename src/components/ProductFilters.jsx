import { Search, SlidersHorizontal, X } from "lucide-react";
import { productCategories } from "../data/products.js";

export default function ProductFilters({
  category,
  searchTerm,
  sortBy,
  counts = {},
  onCategoryChange,
  onSearchChange,
  onSortChange,
  onClear,
  hasActiveFilters,
}) {
  const catClass = (active) =>
    `flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-bold transition ${
      active
        ? "bg-candy-pink/10 text-candy-pink"
        : "text-ink-500 hover:bg-ink-100 hover:text-ink-900"
    }`;

  return (
    <aside className="card p-5 lg:sticky lg:top-24" aria-label="Product filters">
      <div className="mb-5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-ink-900">
          <SlidersHorizontal aria-hidden="true" size={16} />
          <h2 className="font-display text-sm font-bold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-ink-400 transition hover:text-candy-pink"
          >
            <X aria-hidden="true" size={11} />
            Clear
          </button>
        )}
      </div>

      <label className="mb-5 block" htmlFor="product-search">
        <span className="field-label">Search</span>
        <span className="relative block">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300"
            size={15}
          />
          <input
            id="product-search"
            type="search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products"
            className="field-input py-2.5 pl-10 text-[13px]"
          />
        </span>
      </label>

      <div className="mb-5">
        <p className="field-label">Category</p>
        <div className="-mx-1 space-y-0.5 px-1">
          <button
            type="button"
            onClick={() => onCategoryChange("All")}
            aria-pressed={category === "All"}
            className={catClass(category === "All")}
          >
            <span>All categories</span>
            {counts.All != null && (
              <span className="text-[10px] font-semibold text-ink-300">{counts.All}</span>
            )}
          </button>
          {productCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(item)}
              aria-pressed={category === item}
              className={catClass(category === item)}
            >
              <span>{item}</span>
              {counts[item] != null && (
                <span className="text-[10px] font-semibold text-ink-300">{counts[item]}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <label className="block" htmlFor="product-sort">
        <span className="field-label">Sort</span>
        <select
          id="product-sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="field-input py-2.5 text-[13px]"
        >
          <option value="featured">Featured first</option>
          <option value="name-asc">Name A–Z</option>
          <option value="category-asc">Category A–Z</option>
        </select>
      </label>
    </aside>
  );
}
