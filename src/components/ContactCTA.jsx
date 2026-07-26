import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/site.js";

export default function ContactCTA({
  title = "Found something you love?",
  description = "Message us on WhatsApp for availability, colours, customisation, and delivery details.",
}) {
  return (
    <section className="section-padding">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-candy-gradient p-8 text-white shadow-pink sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 animate-blob rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 animate-blob-slow rounded-full bg-candy-yellow/30 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.14] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/90">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="border-transparent bg-white text-candy-pink hover:text-candy-violet"
              >
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp us
              </Button>
              <Button
                to="/contact"
                variant="ghost"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Send a message
                <ArrowRight aria-hidden="true" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
