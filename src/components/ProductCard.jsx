import { Instagram, MessageCircle, Sparkles } from "lucide-react";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/products.js";

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-peach-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden bg-peach-100">
        <img
          src={product.image}
          alt={`${product.name} handmade ${product.category.toLowerCase()} placeholder`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.isCustomisable && (
            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-blush-500 shadow-sm">
              Customisable
            </span>
          )}
          {product.isHandmade && (
            <span className="inline-flex items-center gap-1 rounded-full bg-peach-50 px-2.5 py-1 text-[11px] font-bold text-clay-500 shadow-sm">
              <Sparkles aria-hidden="true" size={12} />
              Handmade
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blush-400">
          {product.category}
        </p>
        <h3 className="font-display text-xl font-bold leading-tight text-clay-700">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-5 text-clay-500 sm:text-[13px]">
          {product.description}
        </p>
        <div className="mt-4 grid gap-2">
          <Button
            href={product.instagramUrl}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            className="px-3 py-2 text-xs"
            aria-label={`View ${product.name} on Instagram`}
          >
            <Instagram aria-hidden="true" size={17} />
            View on Instagram
          </Button>
          <Button
            href={createWhatsAppLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-xs"
            aria-label={`Ask about ${product.name} on WhatsApp`}
          >
            <MessageCircle aria-hidden="true" size={17} />
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}
