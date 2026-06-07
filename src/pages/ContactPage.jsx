import { Instagram, MapPin, MessageCircle, Palette, Sparkles } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  createWhatsAppLink,
  instagramProfile,
  shubhamInstagramProfile,
} from "../data/products.js";

const contactCards = [
  {
    title: "WhatsApp enquiry",
    description:
      "Ask about availability, colours, customisation, delivery details, or purchase assistance.",
    icon: MessageCircle,
    tone: "text-[#1DA851] bg-[#25D366]/12",
  },
  {
    title: "Custom order enquiry",
    description:
      "Have something specific in mind? We can create customised products across our listed categories and also explore new handmade ideas based on your requirement.",
    icon: Palette,
    tone: "text-blush-500 bg-blush-100",
  },
  {
    title: "Delivery note",
    description: "Delivering handmade products across India.",
    icon: MapPin,
    tone: "text-clay-500 bg-peach-100",
  },
];

export default function ContactPage() {
  return (
    <section className="section-padding bg-warm-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact Us"
          title="Let’s Create Something Beautiful"
          description="Have a product enquiry, custom order idea, or delivery question? Message Thyra World on WhatsApp and we’ll help you with availability, colours, customisation, and delivery details."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-peach-100 bg-white p-6 shadow-soft sm:p-8">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-100 text-blush-500">
              <Sparkles aria-hidden="true" size={25} />
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-clay-700 sm:text-4xl">
              Product enquiries, custom orders, and purchase assistance
            </h2>
            <p className="mt-4 text-base leading-7 text-clay-500">
              WhatsApp is the fastest way to discuss product availability, colour
              choices, custom requirements, and delivery timelines.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="Enquire with Thyra World on WhatsApp"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Enquire on WhatsApp
              </Button>
              <Button
                href={instagramProfile}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                aria-label="Visit Thyra World on Instagram"
              >
                <Instagram aria-hidden="true" size={18} />
                Visit @thyraworld
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-peach-100 bg-white p-5 shadow-soft"
                >
                  <span
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${card.tone}`}
                  >
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h3 className="text-lg font-bold text-clay-700">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-clay-500">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-3xl border border-peach-100 bg-peach-100 p-5 shadow-soft sm:grid-cols-2 sm:p-6">
          <a
            href={instagramProfile}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white p-4 font-semibold text-clay-600 transition hover:-translate-y-0.5 hover:text-blush-500 hover:shadow-soft"
          >
            <Instagram aria-hidden="true" size={21} />
            Thyra World @thyraworld
          </a>
          <a
            href={shubhamInstagramProfile}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white p-4 font-semibold text-clay-600 transition hover:-translate-y-0.5 hover:text-blush-500 hover:shadow-soft"
          >
            <Instagram aria-hidden="true" size={21} />
            Shubham Salehria @shubhamsalehria
          </a>
        </div>
      </div>
    </section>
  );
}
