import { BookOpen, Instagram, MessageCircle } from "lucide-react";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/site.js";

export default function EbookCard({ ebook }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        <img
          src={ebook.image}
          alt={`${ebook.title} — cover`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-yarn-violet/12 text-yarn-violet">
          <BookOpen aria-hidden="true" size={19} />
        </span>
        <h3 className="font-display text-xl font-bold leading-tight text-bone-50">
          {ebook.title}
        </h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-yarn-violet">
          {ebook.author}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-bone-400">{ebook.description}</p>

        <div className="mt-5 grid gap-2.5">
          <Button
            href={createWhatsAppLink(ebook.title)}
            target="_blank"
            rel="noreferrer"
            className="w-full text-xs"
            aria-label={`Enquire about ${ebook.title} on WhatsApp`}
          >
            <MessageCircle aria-hidden="true" size={16} />
            Enquire on WhatsApp
          </Button>
          {ebook.instagramUrl && (
            <Button
              href={ebook.instagramUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="w-full text-xs"
              aria-label={`View ${ebook.title} on Instagram`}
            >
              <Instagram aria-hidden="true" size={16} />
              View on Instagram
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
