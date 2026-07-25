import { BookOpen, MessageCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import EbookCard from "../components/EbookCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { ebooks } from "../data/products.js";
import { createWhatsAppLink } from "../data/site.js";

export default function EbooksPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />

      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="E-books"
            icon={BookOpen}
            title="Books by Shubham Salehria"
            description="Thoughtful, emotional, and inspiring writing from the founder of Thyra World — her stories, reflections, and creative work beyond handmade products."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {ebooks.map((ebook) => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="glass relative overflow-hidden p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-drift rounded-full bg-yarn-violet/20 blur-3xl" />
            <div className="relative">
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-yarn-violet/12 text-yarn-violet">
                <BookOpen aria-hidden="true" size={24} />
              </span>
              <h2 className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                Interested in Shubham’s writing?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-bone-400 sm:text-base">
                Message us for availability updates, book-related enquiries, and
                purchase assistance when a title is released.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  href={createWhatsAppLink("books by Shubham Salehria")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" size={17} />
                  Enquire on WhatsApp
                </Button>
                <Button to="/contact" variant="secondary">
                  Send a message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
