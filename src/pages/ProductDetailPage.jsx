import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MessageCircle,
  Palette,
  Sparkles,
  Truck,
} from "lucide-react";
import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { bagById, bags } from "../data/bags.js";
import { createWhatsAppLink } from "../data/site.js";
import { getYarn } from "../data/yarns.js";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = bagById[productId];
  const [active, setActive] = useState(0);

  // Reset the gallery when navigating between products.
  useEffect(() => setActive(0), [productId]);

  // Arrow-key navigation through the gallery.
  useEffect(() => {
    if (!product) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + product.photos.length) % product.photos.length);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % product.photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product]);

  // App's ScrollAndMeta only knows static routes, so set our own meta here.
  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} | Thyra World`;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.content = `${product.tagline}. ${product.description}`.slice(0, 300);
  }, [product]);

  if (!product) {
    return (
      <section className="section-padding">
        <div className="shell">
          <div className="glass p-10 text-center">
            <h1 className="font-display text-3xl font-bold text-bone-50">
              We couldn&apos;t find that product
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-bone-400">
              It may have been renamed or sold. Browse everything else, or ask us
              directly — we can usually remake it.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/products">
                <ArrowLeft aria-hidden="true" size={16} />
                Back to products
              </Button>
              <Button href={createWhatsAppLink()} target="_blank" rel="noreferrer" variant="secondary">
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const photos = product.photos;
  const related = bags.filter((b) => b.id !== product.id).slice(0, 4);
  const step = (d) => setActive((i) => (i + d + photos.length) % photos.length);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />

      <section className="pb-10 pt-8">
        <div className="shell">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-bone-500 transition hover:text-bone-100"
          >
            <ArrowLeft aria-hidden="true" size={14} />
            All products
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* ------------------------ Gallery ------------------------ */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="glass relative overflow-hidden p-2.5">
                <div className="relative overflow-hidden rounded-2xl bg-ink-800">
                  <img
                    key={photos[active].full}
                    src={photos[active].full}
                    alt={`${product.name} — view ${active + 1} of ${photos.length}`}
                    className="mx-auto max-h-[70vh] w-auto animate-fade-up object-contain"
                  />

                  {photos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => step(-1)}
                        aria-label="Previous photo"
                        className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/75 text-bone-100 backdrop-blur transition hover:border-white/35 hover:bg-ink-900"
                      >
                        <ChevronLeft aria-hidden="true" size={19} />
                      </button>
                      <button
                        type="button"
                        onClick={() => step(1)}
                        aria-label="Next photo"
                        className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/75 text-bone-100 backdrop-blur transition hover:border-white/35 hover:bg-ink-900"
                      >
                        <ChevronRight aria-hidden="true" size={19} />
                      </button>
                      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/12 bg-ink-900/80 px-3 py-1 font-mono text-[10px] text-bone-300 backdrop-blur">
                        {active + 1} / {photos.length}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {photos.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-2.5">
                  {photos.map((p, i) => (
                    <button
                      key={p.card}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`View photo ${i + 1}`}
                      aria-pressed={i === active}
                      className={`overflow-hidden rounded-xl border transition ${
                        i === active
                          ? "border-yarn-coral/70 shadow-glow-coral"
                          : "border-white/[0.08] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={p.card}
                        alt=""
                        className="aspect-[4/5] w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ------------------------ Details ------------------------ */}
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-yarn-coral">
                {product.category}
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold leading-[1.08] text-gradient sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base text-bone-400">{product.tagline}</p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-yarn-sage/30 bg-yarn-sage/10 px-3 py-1.5 text-[11px] font-semibold text-yarn-sage">
                  <Sparkles aria-hidden="true" size={12} />
                  Made to order
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-bone-300">
                  Price on enquiry
                </span>
              </div>

              <p className="mt-6 text-sm leading-7 text-bone-300">{product.description}</p>

              {/* Colours */}
              <div className="mt-8">
                <p className="field-label">Colours in this piece</p>
                <div className="flex flex-wrap gap-2.5">
                  {product.colours.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3.5"
                    >
                      <span
                        className="h-6 w-6 rounded-full border border-white/25"
                        style={{ background: getYarn(c.yarn).hex }}
                      />
                      <span className="text-xs font-semibold text-bone-200">{c.name}</span>
                    </span>
                  ))}
                </div>
                <p className="mt-2.5 text-[11px] leading-5 text-bone-500">
                  Want it in different colours? Every bag can be remade in any yarn we
                  stock — build it in the Design Studio or just ask.
                </p>
              </div>

              {/* Details */}
              <div className="mt-8">
                <p className="field-label">Details</p>
                <ul className="space-y-2.5">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <Sparkles
                        aria-hidden="true"
                        size={13}
                        className="mt-1 shrink-0 text-yarn-coral"
                      />
                      <span className="text-sm leading-6 text-bone-300">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-9 grid gap-2.5 sm:grid-cols-2">
                <Button
                  href={createWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5"
                >
                  <MessageCircle aria-hidden="true" size={17} />
                  Order on WhatsApp
                </Button>
                {/* Carries the product through so the studio can recolour its
                    actual photograph rather than a generic illustration. */}
                <Button
                  to="/studio"
                  state={{ fromProduct: product.id }}
                  variant="secondary"
                  className="py-3.5"
                >
                  <Palette aria-hidden="true" size={17} />
                  Customise colours
                </Button>
              </div>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                <Button
                  href={product.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="py-3"
                >
                  <Instagram aria-hidden="true" size={16} />
                  See it on Instagram
                </Button>
                <Button to="/contact" variant="ghost" className="py-3">
                  Send a message
                </Button>
              </div>

              <div className="glass mt-6 flex items-start gap-3 p-4">
                <Truck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-yarn-amber" />
                <p className="text-xs leading-6 text-bone-400">
                  Handmade to order and delivered across India. Because each piece is
                  crocheted by hand, colours and texture vary slightly from the photos —
                  that&apos;s the handmade part. We confirm size, colour, and timeline
                  with you on WhatsApp before starting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Related ---------------------- */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="shell">
            <h2 className="mb-8 font-display text-2xl font-bold text-gradient sm:text-3xl">
              You might also like
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((b) => (
                <ProductCard key={b.id} product={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
