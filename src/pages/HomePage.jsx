import {
  Gift,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Wand2,
} from "lucide-react";
import Button from "../components/Button.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  createWhatsAppLink,
  featuredCategories,
  instagramProfile,
  shubhamInstagramProfile,
} from "../data/products.js";

const whyCards = [
  {
    title: "Handmade with care",
    description:
      "Every piece is created slowly, thoughtfully, and with a real person’s hands behind it.",
    icon: HeartHandshake,
  },
  {
    title: "Custom orders available",
    description:
      "Colours, sizes, gift ideas, and little details can be discussed directly on WhatsApp.",
    icon: Wand2,
  },
  {
    title: "Delivered across India",
    description:
      "Thyra World ships handmade favourites to homes, friends, and loved ones across India.",
    icon: MapPin,
  },
  {
    title: "Women-led family business",
    description:
      "A family-run brand with a dream of creating more meaningful work for women.",
    icon: Gift,
  },
];

const instagramProfiles = [
  {
    title: "Thyra World",
    handle: "@thyraworld",
    description:
      "Handmade products, custom orders, reels, product videos, and new collections.",
    href: instagramProfile,
    icon: Sparkles,
  },
  {
    title: "Shubham Salehria",
    handle: "@shubhamsalehria",
    description:
      "Founder’s journey, personal reflections, creativity, writing, and inspiration.",
    href: shubhamInstagramProfile,
    icon: HeartHandshake,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-warm-radial">
        <div className="absolute left-8 top-24 h-44 w-44 rounded-full bg-blush-200/46 blur-3xl" />
        <div className="absolute bottom-24 right-10 h-56 w-56 rounded-full bg-peach-200/70 blur-3xl" />
        <div className="mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl items-center gap-5 px-4 py-6 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-14">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-bold text-blush-500 shadow-sm backdrop-blur-lg">
              <Sparkles aria-hidden="true" size={16} />
              Handmade, customisable, India-wide delivery
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-clay-700 sm:text-6xl sm:leading-[1.04] lg:text-7xl">
              Handmade with Love, Styled for Everyday Joy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-clay-600 sm:text-xl">
              Discover beautifully handmade bags, baskets, accessories, cosy little
              essentials, and custom creations from Thyra World.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products">
                <Scissors aria-hidden="true" size={18} />
                Explore Products
              </Button>
              <Button
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                aria-label="Enquire with Thyra World on WhatsApp"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Enquire on WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-5 top-12 h-28 w-28 rounded-full bg-white/70 blur-2xl" />
              <div className="absolute -right-5 bottom-10 h-36 w-36 rounded-full bg-blush-200/70 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/80 bg-white/52 p-4 shadow-glow backdrop-blur-xl">
                <img
                  src="/images/thyra-hero.png"
                  alt="Soft handmade Thyra World product mood board with a bag, basket, mug cozy, coasters, pouch, scrunchie, bookmark, and braided cord"
                  className="aspect-[5/2] w-full rounded-[1.5rem] object-cover sm:aspect-[4/3]"
                />
                <div className="absolute bottom-8 left-8 hidden max-w-[17rem] rounded-3xl border border-white/80 bg-white/76 p-5 shadow-soft backdrop-blur-xl sm:block">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blush-500">
                    From our hands
                  </p>
                  <p className="mt-2 text-lg font-bold leading-6 text-clay-700">
                    Custom colours, cute details, and thoughtful gifting pieces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 pt-6 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Categories"
            title="Little handmade joys for everyday use, gifting, and cosy corners"
            description="Browse soft, personal categories and enquire directly for colours, availability, and custom ideas."
          />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Thyra World"
            title="Warm, personal, and made with the kind of care you can feel"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-peach-100 bg-white p-5 shadow-soft"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-peach-100 text-blush-500">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h3 className="text-lg font-bold text-clay-700">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-clay-500">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-peach-100 bg-peach-100 p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blush-300/30 blur-3xl" />
            <div className="absolute -bottom-20 left-12 h-48 w-48 rounded-full bg-white/60 blur-3xl" />
            <div className="pointer-events-none absolute left-6 top-8 hidden h-24 w-44 rounded-[50%] border border-blush-200/70 sm:block" />
            <div className="relative">
              <SectionHeader
                eyebrow="Instagram"
                title="See the Story Behind the Creations"
                description="Follow Thyra World for handmade product updates, reels, custom creations, and behind-the-scenes moments. You can also follow Shubham Salehria to connect with the founder’s personal journey, writing, creativity, and everyday inspiration."
              />
              <div className="grid gap-5 lg:grid-cols-2">
                {instagramProfiles.map((profile) => {
                  const Icon = profile.icon;
                  return (
                    <article
                      key={profile.handle}
                      className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-7"
                    >
                      <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-gradient-to-br from-blush-300 via-peach-300 to-clay-200 opacity-35 transition group-hover:scale-110" />
                      <div className="relative">
                        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-400 to-peach-300 text-white shadow-sm">
                          <Icon aria-hidden="true" size={22} />
                        </span>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blush-400">
                          {profile.handle}
                        </p>
                        <h3 className="mt-2 font-display text-3xl font-bold text-clay-700">
                          {profile.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-clay-500">
                          {profile.description}
                        </p>
                        <Button
                          href={profile.href}
                          target="_blank"
                          rel="noreferrer"
                          variant="secondary"
                          className="mt-6"
                          aria-label={`Visit ${profile.handle} on Instagram`}
                        >
                          <Instagram aria-hidden="true" size={18} />
                          Visit {profile.handle}
                        </Button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
