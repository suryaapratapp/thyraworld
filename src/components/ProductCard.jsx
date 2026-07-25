import { ArrowUpRight, Images, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/site.js";
import { getYarn } from "../data/yarns.js";

export default function ProductCard({ product }) {
  // Photographed products get a detail page; illustrated ones stay inline.
  const hasPhotos = product.photos?.length > 0;
  const src = hasPhotos ? product.photos[0].card : product.photo || product.image;

  // `colours` is the richer shape on photographed bags; `colourways` is the
  // plain yarn-id list on the older illustrated products.
  const swatches = hasPhotos
    ? product.colours.map((c) => ({ label: c.name, hex: getYarn(c.yarn).hex }))
    : (product.colourways || []).map((c) => ({
        label: getYarn(c).name,
        hex: getYarn(c).hex,
      }));

  const Media = hasPhotos ? Link : "div";
  const mediaProps = hasPhotos
    ? { to: `/products/${product.id}`, "aria-label": `View ${product.name}` }
    : {};

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lift">
      <Media
        {...mediaProps}
        className={`relative block overflow-hidden bg-ink-800 ${
          hasPhotos ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={src}
          alt={
            hasPhotos
              ? `${product.name} — handmade crochet bag by Thyra World`
              : `${product.name} — handmade ${product.category.toLowerCase()}`
          }
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.isCustomisable && (
            <span className="rounded-full border border-yarn-coral/30 bg-ink-900/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-yarn-coral backdrop-blur">
              Customisable
            </span>
          )}
          {product.isHandmade && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-ink-900/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-bone-300 backdrop-blur">
              <Sparkles aria-hidden="true" size={10} />
              Handmade
            </span>
          )}
        </div>

        {hasPhotos && product.photos.length > 1 && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/12 bg-ink-900/80 px-2.5 py-1 text-[10px] font-bold text-bone-200 backdrop-blur">
            <Images aria-hidden="true" size={11} />
            {product.photos.length}
          </span>
        )}

        {swatches.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {swatches.map((s) => (
              <span
                key={s.label}
                title={s.label}
                className="h-4 w-4 rounded-full border border-white/30 shadow-md"
                style={{ background: s.hex }}
              />
            ))}
          </div>
        )}
      </Media>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-yarn-coral">
            {product.category}
          </p>
        </div>

        <h3 className="font-display text-lg font-bold leading-tight text-bone-50">
          {hasPhotos ? (
            <Link to={`/products/${product.id}`} className="transition hover:text-yarn-coral">
              {product.name}
            </Link>
          ) : (
            product.name
          )}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-5 text-bone-400">
          {product.tagline || product.description}
        </p>

        <div className="mt-4 grid gap-2">
          {hasPhotos && (
            <Button to={`/products/${product.id}`} className="px-3 py-2.5 text-xs">
              View details
              <ArrowUpRight aria-hidden="true" size={15} />
            </Button>
          )}
          <Button
            href={createWhatsAppLink(product.name)}
            target="_blank"
            rel="noreferrer"
            variant={hasPhotos ? "ghost" : "primary"}
            className="px-3 py-2.5 text-xs"
            aria-label={`Ask about ${product.name} on WhatsApp`}
          >
            <MessageCircle aria-hidden="true" size={15} />
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}
