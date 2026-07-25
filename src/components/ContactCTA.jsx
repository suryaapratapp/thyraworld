import { ArrowRight, MessageCircle, Palette } from "lucide-react";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/site.js";

export default function ContactCTA({
  title = "Found something you love?",
  description = "Message us on WhatsApp for product availability, customisation options, colours, purchase assistance, and delivery details.",
}) {
  return (
    <section className="section-padding">
      <div className="shell">
        <div className="glass relative overflow-hidden p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 animate-drift rounded-full bg-yarn-coral/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 animate-drift-slow rounded-full bg-yarn-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-yarn-coral backdrop-blur">
                <Palette aria-hidden="true" size={23} />
              </span>
              <h2 className="font-display text-3xl font-bold leading-[1.12] text-gradient sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-bone-400 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={18} />
                Enquire on WhatsApp
              </Button>
              <Button to="/contact" variant="secondary">
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
