import { ArrowRight, HeartHandshake, MapPin, MessageCircle, Palette, Users } from "lucide-react";
import Button from "../components/Button.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import InstagramSection from "../components/InstagramSection.jsx";
import JoinSection from "../components/JoinSection.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { bags, featuredCategories } from "../data/products.js";
import { createWhatsAppLink } from "../data/site.js";

const whyCards = [
  {
    title: "Handmade with care",
    description:
      "Every piece is crocheted slowly, thoughtfully, and by a real person's hands.",
    icon: HeartHandshake,
    accent: "#FF4D8D",
  },
  {
    title: "Customised for you",
    description:
      "Want a piece in a different colour or size? Just ask — we remake any design your way.",
    icon: Palette,
    accent: "#7C3AED",
  },
  {
    title: "Delivered across India",
    description:
      "We ship handmade favourites to homes, friends, and loved ones all over India.",
    icon: MapPin,
    accent: "#06D6A0",
  },
  {
    title: "Women-led family business",
    description:
      "A family-run brand with a dream of creating more meaningful work for women.",
    icon: Users,
    accent: "#FFD60A",
  },
];

export default function HomePage() {
  const featured = bags.slice(0, 6);

  return (
    <>
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero" />
        <div className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 animate-blob rounded-full bg-candy-pink/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-80 w-80 animate-blob-slow rounded-full bg-candy-violet/20 blur-3xl" />

        <div className="shell grid items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="animate-fade-up">
            <span className="eyebrow">Handmade · Customisable · India-wide delivery</span>

            <h1 className="mt-6 font-display text-[2.7rem] font-bold leading-[1.04] text-ink-900 sm:text-6xl">
              Handmade with love,
              <br />
              <span className="text-candy">made for everyday joy</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-ink-500 sm:text-lg">
              Crocheted bags and accessories, every piece worked by hand. Found one you
              love but want it in a different colour? We&apos;ll make it that way.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" className="px-6 py-3.5">
                Shop the collection
                <ArrowRight aria-hidden="true" size={16} />
              </Button>
              <Button
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="px-6 py-3.5"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Enquire on WhatsApp
              </Button>
            </div>
          </div>

          {/* Founder illustration as the hero visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="pointer-events-none absolute inset-x-6 bottom-6 top-12 rounded-[3rem] bg-gradient-to-br from-candy-yellow/25 via-candy-pink/20 to-candy-violet/25 blur-2xl" />
              <img
                src="/images/shubham-character.png"
                alt="Illustration of Shubham Salehria carrying a handmade crochet bag, a notebook, yarn, and a crochet hook"
                className="relative mx-auto w-full max-w-sm animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- CATEGORIES ------------------------- */}
      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="Categories"
            title="Little handmade joys for everyday use"
          />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {featuredCategories.map((category, i) => (
              <CategoryCard key={category} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- FEATURED -------------------------- */}
      <section className="section-padding pt-0">
        <div className="shell">
          <SectionHeader
            eyebrow="Our bags"
            title="Made by hand, one at a time"
            description="A few favourites from the collection — every one photographed exactly as it left our hands."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/products" variant="secondary" className="px-6 py-3.5">
              See all products
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------- WHY ---------------------------- */}
      <section className="section-padding pt-0">
        <div className="shell">
          <SectionHeader eyebrow="Why Thyra World" title="Made with care you can feel" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="card card-hover p-6">
                  <span
                    className="mb-4 flex items-center justify-center rounded-2xl"
                    style={{
                      background: `${card.accent}1A`,
                      color: card.accent,
                      height: 48,
                      width: 48,
                    }}
                  >
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <JoinSection />
      <InstagramSection />
      <ContactCTA />
    </>
  );
}
