import { BookOpen, MessageCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import EbookCard from "../components/EbookCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { createWhatsAppLink, ebooks } from "../data/products.js";

export default function EbooksPage() {
  return (
    <>
      <section className="section-padding bg-warm-radial">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="E-books"
            title="Books by Shubham Salehria"
            description="Explore thoughtful, emotional, and inspiring books authored by Shubham Salehria. This section is dedicated to her writing, stories, reflections, and creative work beyond handmade products."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {ebooks.map((ebook) => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-peach-100 bg-white p-8 text-center shadow-soft sm:p-10">
            <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-peach-100 text-blush-500">
              <BookOpen aria-hidden="true" size={22} />
            </span>
            <h2 className="font-display text-3xl font-bold text-clay-700">
              Interested in Shubham’s writing?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-clay-500">
              Message Thyra World on WhatsApp for availability updates, book-related
              enquiries, and purchase assistance when a title is released.
            </p>
            <Button
              href={createWhatsAppLink("books by Shubham Salehria")}
              target="_blank"
              rel="noreferrer"
              className="mt-7"
              aria-label="Enquire about books by Shubham Salehria on WhatsApp"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
