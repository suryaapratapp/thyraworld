import { Search, SlidersHorizontal, X } from "lucide-react";
import { productCategories } from "../data/products.js";

/**
 * Vertical filter panel for the products sidebar. Categories are a button list
 * rather than a <select> — with only a dozen of them, showing all the options at
 * once is faster to scan than opening a dropdown.
 */
export default function ProductFilters({
  category,
  searchTerm,
  customOnly,
  handmadeOnly,
  sortBy,
  counts = {},
  onCategoryChange,
  onSearchChange,
  onCustomOnlyChange,
  onHandmadeOnlyChange,
  onSortChange,
  onClear,
  hasActiveFilters,
}) {
  const catClass = (active) =>
    `flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-semibold transition ${
      active
        ? "bg-yarn-coral/12 text-yarn-coral"
        : "text-bone-400 hover:bg-white/[0.05] hover:text-bone-100"
    }`;

  const toggleClass = (active) =>
    `flex cursor-pointer select-none items-center gap-2.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition ${
      active
        ? "border-yarn-coral/50 bg-yarn-coral/10 text-yarn-coral"
        : "border-white/[0.08] bg-white/[0.03] text-bone-400 hover:border-white/20 hover:text-bone-100"
    }`;

  return (
    <aside className="glass p-5 lg:sticky lg:top-24" aria-label="Product filters">
      <div className="mb-5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-bone-200">
          <SlidersHorizontal aria-hidden="true" size={16} />
          <h2 className="text-sm font-bold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-bone-500 transition hover:text-yarn-coral"
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
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-bone-500"
            size={15}
          />
          <input
            id="product-search"
            name="product-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products"
            className="field-input py-2.5 pl-10 text-[13px]"
          />
        </span>
      </label>

      <div className="mb-5">
        <p className="field-label">Category</p>
        <div className="-mx-1 max-h-[19rem] space-y-0.5 overflow-y-auto px-1">
          <button
            type="button"
            onClick={() => onCategoryChange("All")}
            aria-pressed={category === "All"}
            className={catClass(category === "All")}
          >
            <span>All categories</span>
            {counts.All != null && (
              <span className="font-mono text-[10px] text-bone-500">{counts.All}</span>
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
                <span className="font-mono text-[10px] text-bone-500">{counts[item]}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <label className="mb-5 block" htmlFor="product-sort">
        <span className="field-label">Sort</span>
        <select
          id="product-sort"
          name="product-sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="field-input py-2.5 text-[13px]"
        >
          <option value="featured">Featured first</option>
          <option value="name-asc">Name A–Z</option>
          <option value="category-asc">Category A–Z</option>
        </select>
      </label>

      <div>
        <p className="field-label">Show only</p>
        <div className="grid gap-2">
          <label className={toggleClass(customOnly)} htmlFor="customisable-only">
            <input
              id="customisable-only"
              name="customisable-only"
              type="checkbox"
              checked={customOnly}
              onChange={(event) => onCustomOnlyChange(event.target.checked)}
              className="h-3.5 w-3.5 rounded border-white/20 bg-transparent accent-yarn-coral"
            />
            Customisable
          </label>
          <label className={toggleClass(handmadeOnly)} htmlFor="handmade-only">
            <input
              id="handmade-only"
              name="handmade-only"
              type="checkbox"
              checked={handmadeOnly}
              onChange={(event) => onHandmadeOnlyChange(event.target.checked)}
              className="h-3.5 w-3.5 rounded border-white/20 bg-transparent accent-yarn-coral"
            />
            Handmade
          </label>
        </div>
      </div>
    </aside>
  );
}
