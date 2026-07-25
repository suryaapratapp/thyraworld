import {
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Scissors,
} from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  contactEmail,
  createWhatsAppLink,
  instagramHandle,
  instagramProfile,
  whatsappDisplay,
} from "../data/site.js";

const channels = [
  {
    label: "WhatsApp",
    value: whatsappDisplay,
    href: createWhatsAppLink(),
    icon: MessageCircle,
    accent: "#25D366",
    note: "Fastest for product questions",
    external: true,
  },
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: Mail,
    accent: "#FF6B4A",
    note: "Best for detailed enquiries",
    external: false,
  },
  {
    label: "Instagram",
    value: `@${instagramHandle}`,
    href: instagramProfile,
    icon: Instagram,
    accent: "#A78BFA",
    note: "New designs and reels",
    external: true,
  },
];

const helpCards = [
  {
    title: "Custom orders",
    description:
      "Have something specific in mind? We customise across every listed category — and explore new ideas based on what you need.",
    icon: Palette,
    accent: "#FF6B4A",
  },
  {
    title: "Freelance crocheters",
    description:
      "Love crocheting and want paid work you can do from home, at your own pace? Choose “Work with us” in the form above.",
    icon: Scissors,
    accent: "#A78BFA",
  },
  {
    title: "Learn crochet",
    description:
      "Want to learn from scratch and join a community of people who love yarn? Pick “Learn crochet” and we'll add you to the waitlist.",
    icon: GraduationCap,
    accent: "#4ECDC4",
  },
  {
    title: "Delivery",
    description:
      "We deliver handmade products across India. Ask us about timelines for your city before you order.",
    icon: MapPin,
    accent: "#FFB627",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50" />

      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="Contact Us"
            icon={MessageCircle}
            title="Let’s create something beautiful"
            description="Product enquiry, custom order, freelance application, or joining the crochet community — it all starts with this form."
          />

          {/* Quick channels */}
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="glass glass-hover group flex items-center gap-4 p-4"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 transition group-hover:scale-110"
                    style={{ background: `${c.accent}1A`, color: c.accent }}
                  >
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-bone-500">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-bold text-bone-100">
                      {c.value}
                    </span>
                    <span className="block text-[11px] text-bone-500">{c.note}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ContactForm />

            <div className="grid content-start gap-4">
              {helpCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="glass glass-hover p-5">
                    <span
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10"
                      style={{ background: `${card.accent}1A`, color: card.accent }}
                    >
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-bone-50">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-bone-400">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
