import { MessageCircle, Palette } from "lucide-react";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/products.js";

export default function ContactCTA({
  title = "Found something you love?",
  description = "Message us on WhatsApp for product availability, customisation options, colours, purchase assistance, and delivery details.",
}) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blush-400 p-7 text-white shadow-glow sm:p-10 lg:p-12">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/18 blur-2xl" />
          <div className="absolute -bottom-20 left-16 h-56 w-56 rounded-full bg-peach-200/28 blur-2xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/18 backdrop-blur-md">
                <Palette aria-hidden="true" size={24} />
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/88 sm:text-lg">
                {description}
              </p>
            </div>
            <Button
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="bg-white text-blush-500 hover:bg-peach-50"
              aria-label="Enquire with Thyra World on WhatsApp"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
