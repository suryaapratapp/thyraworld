import { BookOpen, Instagram, MessageCircle } from "lucide-react";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/products.js";

export default function EbookCard({ ebook }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-peach-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-glow">
      <div className="aspect-[4/3] overflow-hidden bg-peach-100">
        <img
          src={ebook.image}
          alt={`${ebook.title} e-book cover placeholder`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-peach-100 text-blush-500">
          <BookOpen aria-hidden="true" size={20} />
        </span>
        <h3 className="font-display text-2xl font-bold leading-tight text-clay-700">
          {ebook.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-blush-500">
          Author: {ebook.author}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-clay-500">{ebook.description}</p>
        <div className="mt-5 grid gap-3">
          <Button
            href={createWhatsAppLink(ebook.title)}
            target="_blank"
            rel="noreferrer"
            className="w-full"
            aria-label={`Enquire about ${ebook.title} on WhatsApp`}
          >
            <MessageCircle aria-hidden="true" size={17} />
            Enquire on WhatsApp
          </Button>
          {ebook.instagramUrl && (
            <Button
              href={ebook.instagramUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="w-full"
              aria-label={`View ${ebook.title} on Instagram`}
            >
              <Instagram aria-hidden="true" size={17} />
              View on Instagram
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
