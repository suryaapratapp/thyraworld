import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductFilters from "../components/ProductFilters.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { createWhatsAppLink, products } from "../data/products.js";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [customOnly, setCustomOnly] = useState(false);
  const [handmadeOnly, setHandmadeOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

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

    return [...list].sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "category-asc") {
        return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      }
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id);
    });
  }, [category, customOnly, handmadeOnly, searchTerm, sortBy]);

  return (
    <>
      <section className="section-padding bg-warm-radial">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products"
            title="Browse handmade products and enquire directly on WhatsApp"
            description="Each product can be discussed personally for colours, availability, customisation, and delivery."
          />
          <ProductFilters
            category={category}
            searchTerm={searchTerm}
            customOnly={customOnly}
            handmadeOnly={handmadeOnly}
            sortBy={sortBy}
            onCategoryChange={handleCategoryChange}
            onSearchChange={setSearchTerm}
            onCustomOnlyChange={setCustomOnly}
            onHandmadeOnlyChange={setHandmadeOnly}
            onSortChange={setSortBy}
          />
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-clay-500">
              Showing {filteredProducts.length} handmade product
              {filteredProducts.length === 1 ? "" : "s"}
            </p>
            <Button
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Discuss custom order
            </Button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-peach-100 bg-white p-8 text-center shadow-soft">
              <h2 className="font-display text-3xl font-bold text-clay-700">
                No matching products yet
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-clay-500">
                Try another category or message Thyra World on WhatsApp to discuss
                availability or a custom handmade idea.
              </p>
              <Button
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
              className="mt-6"
            >
                Purchase enquiry on WhatsApp
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
