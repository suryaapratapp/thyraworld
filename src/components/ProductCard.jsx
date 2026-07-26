import { ArrowUpRight, Images, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/site.js";
import { getYarn } from "../data/yarns.js";

export default function ProductCard({ product }) {
  // Photographed products get a detail page; illustrated ones stay inline.
  const hasPhotos = product.photos?.length > 0;
  const src = hasPhotos ? product.photos[0].card : product.photo || product.image;

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
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Media
        {...mediaProps}
        className={`relative block overflow-hidden bg-canvas-soft ${
          hasPhotos ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={src}
          alt={`${product.name} — handmade crochet by Thyra World`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {product.isCustomisable && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-candy-pink shadow-soft backdrop-blur">
            Customisable
          </span>
        )}

        {hasPhotos && product.photos.length > 1 && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-ink-500 shadow-soft backdrop-blur">
            <Images aria-hidden="true" size={11} />
            {product.photos.length}
          </span>
        )}
      </Media>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-candy-violet">
            {product.category}
          </p>
          {swatches.length > 0 && (
            <div className="flex gap-1">
              {swatches.map((s) => (
                <span
                  key={s.label}
                  title={s.label}
                  className="h-3.5 w-3.5 rounded-full ring-1 ring-ink-200"
                  style={{ background: s.hex }}
                />
              ))}
            </div>
          )}
        </div>

        <h3 className="font-display text-lg font-bold leading-tight text-ink-900">
          {hasPhotos ? (
            <Link to={`/products/${product.id}`} className="transition hover:text-candy-pink">
              {product.name}
            </Link>
          ) : (
            product.name
          )}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-5 text-ink-500">
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
            variant={hasPhotos ? "secondary" : "primary"}
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
