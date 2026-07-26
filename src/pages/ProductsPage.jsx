import { useMemo, useState } from "react";
import { MessageCircle, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductFilters from "../components/ProductFilters.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { products } from "../data/products.js";
import { createWhatsAppLink } from "../data/site.js";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSearchParams(value === "All" ? {} : { category: value });
    setFiltersOpen(false);
  };

  const clearFilters = () => {
    setCategory("All");
    setSearchTerm("");
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters = category !== "All" || searchTerm !== "";

  // Counts ignore the category filter so the sidebar shows the full picture.
  const counts = useMemo(() => {
    const s = searchTerm.trim().toLowerCase();
    const base = products.filter(
      (p) => s.length === 0 || p.name.toLowerCase().includes(s)
    );
    const out = { All: base.length };
    for (const p of base) out[p.category] = (out[p.category] || 0) + 1;
    return out;
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    const s = searchTerm.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (s.length === 0 || p.name.toLowerCase().includes(s))
    );

    const featuredOrder = new Map(products.map((p, i) => [p.id, i]));

    return [...list].sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "category-asc") {
        return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      }
      return featuredOrder.get(a.id) - featuredOrder.get(b.id);
    });
  }, [category, searchTerm, sortBy]);

  const filterProps = {
    category,
    searchTerm,
    sortBy,
    counts,
    hasActiveFilters,
    onCategoryChange: handleCategoryChange,
    onSearchChange: setSearchTerm,
    onSortChange: setSortBy,
    onClear: clearFilters,
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />

      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="Products"
            title="Our handmade collection"
            description="Every piece here is crocheted by hand. Want one in a different colour or size? Just ask."
          />

          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-bold text-ink-700 shadow-soft transition hover:border-candy-pink lg:hidden"
            aria-expanded={filtersOpen}
          >
            {filtersOpen ? <X aria-hidden="true" size={16} /> : <SlidersHorizontal aria-hidden="true" size={16} />}
            {filtersOpen ? "Hide filters" : "Filters"}
            {hasActiveFilters && !filtersOpen && (
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-candy-pink" />
            )}
          </button>

          <div className="grid gap-6 lg:grid-cols-[248px_1fr]">
            <div className={filtersOpen ? "block" : "hidden lg:block"}>
              <ProductFilters {...filterProps} />
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-ink-400">
                {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
                {category !== "All" && ` in ${category}`}
              </p>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="card p-10 text-center">
                  <h2 className="font-display text-2xl font-bold text-ink-900">
                    No matching products yet
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink-500">
                    Try another category, or message us — we can usually make what you
                    have in mind.
                  </p>
                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                    >
                      <MessageCircle aria-hidden="true" size={16} />
                      Ask on WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
