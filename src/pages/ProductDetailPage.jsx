import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MessageCircle,
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

  useEffect(() => setActive(0), [productId]);

  useEffect(() => {
    if (!product) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + product.photos.length) % product.photos.length);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % product.photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product]);

  // App's meta map only knows static routes, so set our own here.
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
          <div className="card p-10 text-center">
            <h1 className="font-display text-3xl font-bold text-ink-900">
              We couldn&apos;t find that product
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-500">
              It may have been renamed or sold. Browse everything else, or ask us — we
              can usually remake it.
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
  const related = bags.filter((b) => b.id !== product.id).slice(0, 3);
  const step = (d) => setActive((i) => (i + d + photos.length) % photos.length);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />

      <section className="pb-10 pt-8">
        <div className="shell">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-400 transition hover:text-candy-pink"
          >
            <ArrowLeft aria-hidden="true" size={14} />
            All products
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Gallery */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="card overflow-hidden p-2.5">
                <div className="relative overflow-hidden rounded-2xl bg-canvas-soft">
                  <img
                    key={photos[active].full}
                    src={photos[active].full}
                    alt={`${product.name} — view ${active + 1} of ${photos.length}`}
                    className="mx-auto max-h-[68vh] w-auto animate-fade-up object-contain"
                  />

                  {photos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => step(-1)}
                        aria-label="Previous photo"
                        className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-200 bg-white/90 text-ink-700 shadow-soft backdrop-blur transition hover:border-candy-pink hover:text-candy-pink"
                      >
                        <ChevronLeft aria-hidden="true" size={19} />
                      </button>
                      <button
                        type="button"
                        onClick={() => step(1)}
                        aria-label="Next photo"
                        className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-200 bg-white/90 text-ink-700 shadow-soft backdrop-blur transition hover:border-candy-pink hover:text-candy-pink"
                      >
                        <ChevronRight aria-hidden="true" size={19} />
                      </button>
                      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-ink-500 shadow-soft backdrop-blur">
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
                      className={`overflow-hidden rounded-xl border-2 transition ${
                        i === active
                          ? "border-candy-pink"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={p.card} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-candy-violet">
                  {product.category}
                </p>
                {product.code && (
                  <span className="rounded-full bg-candy-gradient px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-white shadow-pink">
                    {product.code}
                  </span>
                )}
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base text-ink-500">{product.tagline}</p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-candy-mint/12 px-3 py-1.5 text-[11px] font-bold text-candy-mint">
                  <Sparkles aria-hidden="true" size={12} />
                  Made to order
                </span>
                <span className="inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1.5 text-[11px] font-bold text-ink-500">
                  Price on enquiry
                </span>
              </div>

              <p className="mt-6 text-sm leading-7 text-ink-500">{product.description}</p>

              <div className="mt-7">
                <p className="field-label">Colours in this piece</p>
                <div className="flex flex-wrap gap-2.5">
                  {product.colours.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white py-1.5 pl-1.5 pr-3.5"
                    >
                      <span
                        className="h-6 w-6 rounded-full ring-1 ring-ink-200"
                        style={{ background: getYarn(c.yarn).hex }}
                      />
                      <span className="text-xs font-bold text-ink-700">{c.name}</span>
                    </span>
                  ))}
                </div>
                <p className="mt-2.5 text-[11px] leading-5 text-ink-400">
                  Want it in different colours? Every bag can be remade in any yarn we
                  stock — just ask.
                </p>
              </div>

              <div className="mt-7">
                <p className="field-label">Details</p>
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-candy-pink" />
                      <span className="text-sm leading-6 text-ink-500">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
                <Button
                  href={createWhatsAppLink(product.code ? `${product.code} (${product.name})` : product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5"
                >
                  <MessageCircle aria-hidden="true" size={17} />
                  Order on WhatsApp
                </Button>
                <Button to="/contact" variant="secondary" className="py-3.5">
                  Send a message
                </Button>
              </div>

              <Button
                href={product.instagramUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                className="mt-2.5 w-full py-3"
              >
                <Instagram aria-hidden="true" size={16} />
                See it on Instagram
              </Button>

              <div className="card mt-6 flex items-start gap-3 p-4">
                <Truck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-candy-yellow" />
                <p className="text-xs leading-6 text-ink-500">
                  Handmade to order and delivered across India. Because each piece is
                  crocheted by hand, colours and texture vary slightly from the photos —
                  that&apos;s the handmade part. We confirm size, colour, and timeline
                  with you before starting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding">
          <div className="shell">
            <h2 className="mb-7 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              You might also like
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
