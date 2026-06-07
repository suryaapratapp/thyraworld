import { Search, SlidersHorizontal } from "lucide-react";
import { productCategories } from "../data/products.js";

export default function ProductFilters({
  category,
  searchTerm,
  customOnly,
  handmadeOnly,
  sortBy,
  onCategoryChange,
  onSearchChange,
  onCustomOnlyChange,
  onHandmadeOnlyChange,
  onSortChange,
}) {
  return (
    <section
      className="rounded-3xl border border-peach-100 bg-white p-4 shadow-soft sm:p-5"
      aria-label="Product filters"
    >
      <div className="mb-4 flex items-center gap-2 text-clay-700">
        <SlidersHorizontal aria-hidden="true" size={20} />
        <h2 className="text-base font-bold">Find your handmade favourite</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <label className="block" htmlFor="product-search">
          <span className="mb-2 block text-sm font-semibold text-clay-600">Search</span>
          <span className="relative block">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-blush-400"
              size={18}
            />
            <input
              id="product-search"
              name="product-search"
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search by product name"
              className="w-full rounded-2xl border border-peach-100 bg-white px-11 py-3 text-sm font-medium text-clay-700 outline-none transition placeholder:text-clay-300 focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
            />
          </span>
        </label>

        <label className="block" htmlFor="product-category">
          <span className="mb-2 block text-sm font-semibold text-clay-600">Category</span>
          <select
            id="product-category"
            name="product-category"
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-2xl border border-peach-100 bg-white px-4 py-3 text-sm font-semibold text-clay-700 outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
          >
            <option value="All">All categories</option>
            {productCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block" htmlFor="product-sort">
          <span className="mb-2 block text-sm font-semibold text-clay-600">Sort</span>
          <select
            id="product-sort"
            name="product-sort"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full rounded-2xl border border-peach-100 bg-white px-4 py-3 text-sm font-semibold text-clay-700 outline-none transition focus:border-blush-300 focus:ring-4 focus:ring-blush-100"
          >
            <option value="featured">Featured first</option>
            <option value="name-asc">Name A-Z</option>
            <option value="category-asc">Category A-Z</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <label
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-peach-100 bg-peach-50 px-4 py-3 text-sm font-semibold text-clay-600 transition hover:bg-peach-100"
          htmlFor="customisable-only"
        >
          <input
            id="customisable-only"
            name="customisable-only"
            type="checkbox"
            checked={customOnly}
            onChange={(event) => onCustomOnlyChange(event.target.checked)}
            className="h-4 w-4 rounded border-peach-200 text-blush-500 focus:ring-blush-300"
          />
          Customisable only
        </label>
        <label
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-peach-100 bg-peach-50 px-4 py-3 text-sm font-semibold text-clay-600 transition hover:bg-peach-100"
          htmlFor="handmade-only"
        >
          <input
            id="handmade-only"
            name="handmade-only"
            type="checkbox"
            checked={handmadeOnly}
            onChange={(event) => onHandmadeOnlyChange(event.target.checked)}
            className="h-4 w-4 rounded border-peach-200 text-blush-500 focus:ring-blush-300"
          />
          Handmade only
        </label>
      </div>
    </section>
  );
}
