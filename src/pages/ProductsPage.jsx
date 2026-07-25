import { useMemo, useState } from "react";
import { Palette, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductFilters from "../components/ProductFilters.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { products } from "../data/products.js";
import { createWhatsAppLink } from "../data/site.js";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [customOnly, setCustomOnly] = useState(false);
  const [handmadeOnly, setHandmadeOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false); // mobile drawer

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSearchParams(value === "All" ? {} : { category: value });
    setFiltersOpen(false);
  };

  const clearFilters = () => {
    setCategory("All");
    setSearchTerm("");
    setCustomOnly(false);
    setHandmadeOnly(false);
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters =
    category !== "All" || searchTerm !== "" || customOnly || handmadeOnly;

  // Counts ignore the category filter so the sidebar always shows the full picture.
  const counts = useMemo(() => {
    const base = products.filter((p) => {
      const s = searchTerm.trim().toLowerCase();
      return (
        (s.length === 0 || p.name.toLowerCase().includes(s)) &&
        (!customOnly || p.isCustomisable) &&
        (!handmadeOnly || p.isHandmade)
      );
    });
    const out = { All: base.length };
    for (const p of base) out[p.category] = (out[p.category] || 0) + 1;
    return out;
  }, [searchTerm, customOnly, handmadeOnly]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const list = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch);
      const matchesCustom = !customOnly || product.isCustomisable;
      const matchesHandmade = !handmadeOnly || product.isHandmade;
      return matchesCategory && matchesSearch && matchesCustom && matchesHandmade;
    });

    const featuredOrder = new Map(products.map((p, i) => [p.id, i]));

    return [...list].sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "category-asc") {
        return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      }
      return featuredOrder.get(a.id) - featuredOrder.get(b.id);
    });
  }, [category, customOnly, handmadeOnly, searchTerm, sortBy]);

  const filterProps = {
    category,
    searchTerm,
    customOnly,
    handmadeOnly,
    sortBy,
    counts,
    hasActiveFilters,
    onCategoryChange: handleCategoryChange,
    onSearchChange: setSearchTerm,
    onCustomOnlyChange: setCustomOnly,
    onHandmadeOnlyChange: setHandmadeOnly,
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
            icon={Sparkles}
            title="Our handmade collection"
            description="Every piece here is crocheted by hand. Found one you love but want it in a different colour or size? We customise any of them."
          />

          {/* Mobile filter toggle */}
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-bone-200 transition hover:border-white/25 lg:hidden"
            aria-expanded={filtersOpen}
          >
            {filtersOpen ? (
              <X aria-hidden="true" size={16} />
            ) : (
              <SlidersHorizontal aria-hidden="true" size={16} />
            )}
            {filtersOpen ? "Hide filters" : "Filters"}
            {hasActiveFilters && !filtersOpen && (
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-yarn-coral" />
            )}
          </button>

          <div className="grid gap-6 lg:grid-cols-[264px_1fr]">
            {/* Sidebar — always rendered on desktop, toggled on mobile */}
            <div className={filtersOpen ? "block" : "hidden lg:block"}>
              <ProductFilters {...filterProps} />
            </div>

            <div>
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-bone-500">
                  {filteredProducts.length} product
                  {filteredProducts.length === 1 ? "" : "s"}
                  {category !== "All" && ` in ${category}`}
                </p>
                <Button to="/studio" variant="secondary" className="w-full sm:w-auto">
                  <Palette aria-hidden="true" size={17} />
                  Customise a piece
                </Button>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="glass p-10 text-center">
                  <h2 className="font-display text-2xl font-bold text-bone-50">
                    No matching products yet
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-bone-400">
                    Try another category, clear your filters, or message us — we can
                    usually make what you have in mind.
                  </p>
                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                    >
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
