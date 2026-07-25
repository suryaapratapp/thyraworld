import {
  ArrowRight,
  Gift,
  HeartHandshake,
  MapPin,
  Palette,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import InstagramSection from "../components/InstagramSection.jsx";
import JoinSection from "../components/JoinSection.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import YarnStrands from "../components/YarnStrands.jsx";
import ProductPreview from "../components/studio/ProductPreview.jsx";
import { featuredCategories } from "../data/products.js";
import { getYarn } from "../data/yarns.js";

const whyCards = [
  {
    title: "Handmade with care",
    description:
      "Every piece is created slowly, thoughtfully, and with a real person’s hands behind it.",
    icon: HeartHandshake,
    accent: "#FF6B4A",
  },
  {
    title: "Customised for you",
    description:
      "Want a piece in a different colour, size, or stitch? We remake any design your way.",
    icon: Wand2,
    accent: "#A78BFA",
  },
  {
    title: "Delivered across India",
    description:
      "Thyra World ships handmade favourites to homes, friends, and loved ones across India.",
    icon: MapPin,
    accent: "#4ECDC4",
  },
  {
    title: "Women-led family business",
    description:
      "A family-run brand with a dream of creating more meaningful work for women.",
    icon: Gift,
    accent: "#FFB627",
  },
];

// Rotating colourways for the hero preview — shows off the studio at a glance.
const heroDesign = { body: "coral", accent: "cream", handle: "camel" };

export default function HomePage() {
  return (
    <>
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />
        <YarnStrands className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] w-full opacity-70" />

        <div className="shell grid min-h-[calc(100vh-140px)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="relative z-10 animate-fade-up">
            <span className="eyebrow">
              <Sparkles aria-hidden="true" size={13} />
              Handmade · Customisable · India-wide delivery
            </span>

            <h1 className="mt-7 font-display text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Handmade with love,</span>
              <br />
              <span className="text-gradient-yarn">made for everyday joy</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-bone-400 sm:text-lg sm:leading-8">
              Crocheted bags, baskets, accessories, and cosy little essentials — every
              piece worked by hand in our own studio. Found one you love but want it in
              a different colour? We&apos;ll make it that way.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" className="px-6 py-3.5">
                Shop the collection
                <ArrowRight aria-hidden="true" size={16} />
              </Button>
              <Button to="/studio" variant="secondary" className="px-6 py-3.5">
                <Palette aria-hidden="true" size={18} />
                Customise a piece
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { value: "11+", label: "Product categories" },
                { value: "16", label: "Yarn colourways" },
                { value: "100%", label: "Handmade to order" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-bone-50">{stat.value}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — the live studio preview, not a static photo */}
          <div className="relative z-10">
            <div className="glass relative mx-auto max-w-lg overflow-hidden p-6">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 animate-drift rounded-full bg-yarn-coral/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-14 h-64 w-64 animate-drift-slow rounded-full bg-yarn-violet/25 blur-3xl" />

              <div className="relative flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-500">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-yarn-sage" />
                Design Studio · live preview
              </div>

              <ProductPreview
                productId="bag"
                body={getYarn(heroDesign.body)}
                accent={getYarn(heroDesign.accent)}
                handle={getYarn(heroDesign.handle)}
                stitch="single"
                className="relative mx-auto w-full max-w-sm drop-shadow-2xl"
              />

              {/* Swatch strip hinting at what the studio can do */}
              <div className="relative mt-1 flex items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-ink-900/60 p-3">
                <div className="flex gap-1.5">
                  {["coral", "amber", "sage", "violet", "rose", "cream"].map((c) => (
                    <span
                      key={c}
                      title={getYarn(c).name}
                      className="h-5 w-5 rounded-full border border-white/20"
                      style={{ background: getYarn(c).hex }}
                    />
                  ))}
                </div>
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yarn-coral transition hover:gap-2.5"
                >
                  Customise
                  <ArrowRight aria-hidden="true" size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- CATEGORIES ------------------------- */}
      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="Featured Categories"
            title="Little handmade joys for everyday use"
            description="Browse soft, personal categories and enquire directly for colours, availability, and custom ideas."
          />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {featuredCategories.map((category, i) => (
              <CategoryCard key={category} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- STUDIO PROMOTION ---------------------- */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mesh-soft" />
        <div className="shell relative">
          <div className="glass relative overflow-hidden p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-drift rounded-full bg-yarn-sage/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <span className="eyebrow">
                  <Wand2 aria-hidden="true" size={13} />
                  Customisation
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-gradient sm:text-4xl lg:text-5xl">
                  Love it, but in
                  <br />
                  <span className="text-gradient-yarn">your colour?</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-bone-400">
                  Any piece in our collection can be remade in a different yarn, size, or
                  stitch — just tell us what you have in mind. Our Design Studio lets you
                  preview the change before you ask, across bags, baskets, coasters,
                  AirPod cases, lip balm holders, and pouches.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Bags", "Baskets", "Coasters", "AirPod Cases", "Lip Balm Holders", "Pouches"].map(
                    (p) => (
                      <span
                        key={p}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-bone-300"
                      >
                        {p}
                      </span>
                    )
                  )}
                </div>

                <Button to="/studio" className="mt-8 px-6 py-3.5">
                  <Palette aria-hidden="true" size={18} />
                  Try a colour change
                  <ArrowRight aria-hidden="true" size={16} />
                </Button>
              </div>

              {/* Three colourways of the same basket */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { body: "violet", accent: "cream", handle: "charcoal" },
                  { body: "sage", accent: "cream", handle: "camel" },
                  { body: "amber", accent: "terracotta", handle: "charcoal" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 transition duration-300 hover:-translate-y-1.5 hover:border-white/20"
                  >
                    <ProductPreview
                      productId="basket"
                      body={getYarn(c.body)}
                      accent={getYarn(c.accent)}
                      handle={getYarn(c.handle)}
                      stitch="granny"
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- WHY ---------------------------- */}
      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="Why Thyra World"
            title="Made with the kind of care you can feel"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="glass glass-hover group relative overflow-hidden p-6">
                  <span
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-40"
                    style={{ background: card.accent }}
                  />
                  <span
                    className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
                    style={{ background: `${card.accent}1A`, color: card.accent }}
                  >
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="relative font-display text-lg font-bold text-bone-50">
                    {card.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-bone-400">
                    {card.description}
                  </p>
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
