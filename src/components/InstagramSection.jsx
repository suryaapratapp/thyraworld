import { ArrowUpRight, Heart, Instagram, Play, Sparkles } from "lucide-react";
import Button from "./Button.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { instagramHandle, instagramProfile, shubhamInstagramProfile } from "../data/site.js";

/**
 * Reel showcase without Instagram's embed script — each card links straight to
 * the profile. Swap `href` for a specific reel permalink whenever you want a
 * card to open one particular reel instead of the grid.
 */
const reelCards = [
  {
    title: "Bags in progress",
    caption: "Stitch by stitch, from yarn ball to finished tote",
    accent: "#FF6B4A",
    href: instagramProfile,
  },
  {
    title: "Colour picking",
    caption: "Choosing yarn combinations for a custom order",
    accent: "#A78BFA",
    href: instagramProfile,
  },
  {
    title: "Tiny things",
    caption: "AirPod cases, lip balm holders, and other little joys",
    accent: "#4ECDC4",
    href: instagramProfile,
  },
  {
    title: "Packed with care",
    caption: "How every order leaves our hands before it reaches yours",
    accent: "#FFB627",
    href: instagramProfile,
  },
];

function ReelCard({ reel }) {
  return (
    <a
      href={reel.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800 p-3 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lift"
    >
      {/* Placeholder wash — swap for a real thumbnail once reels are wired up */}
      <span
        className="pointer-events-none absolute inset-0 opacity-55 transition duration-500 group-hover:opacity-75"
        style={{
          background: `radial-gradient(circle at 32% 24%, ${reel.accent}4D, transparent 62%), radial-gradient(circle at 76% 84%, ${reel.accent}2E, transparent 58%)`,
        }}
      />
      <span className="pointer-events-none absolute inset-0 grid-bg opacity-35" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />

      {/* Centred play affordance reads clearly as "video goes here" */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-ink-900/60 text-bone-100 backdrop-blur transition duration-300 group-hover:scale-110 group-hover:border-white/50">
          <Play aria-hidden="true" size={15} fill="currentColor" />
        </span>
      </span>

      <span className="relative">
        <span className="block text-[13px] font-bold leading-tight text-bone-50">
          {reel.title}
        </span>
        <span className="mt-1 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-bone-400 transition group-hover:text-bone-100">
          Watch
          <ArrowUpRight aria-hidden="true" size={10} />
        </span>
      </span>
    </a>
  );
}

export default function InstagramSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft" />

      <div className="shell relative">
        <SectionHeader
          eyebrow={`@${instagramHandle}`}
          icon={Instagram}
          title="See every stitch as it happens"
          description="Reels of products being made, new designs, colour experiments, and behind-the-scenes moments — all on Instagram."
        />

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {reelCards.map((reel) => (
            <ReelCard key={reel.title} reel={reel} />
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] text-bone-500">
          Reel previews — tap any card to watch on Instagram.
        </p>

        {/* Follow CTA */}
        <div className="glass mt-8 flex flex-col items-center gap-6 p-7 text-center sm:p-10 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yarn-ember via-yarn-coral to-yarn-amber text-white shadow-glow-coral">
              <Instagram aria-hidden="true" size={26} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold text-bone-50 sm:text-3xl">
                Follow us for new designs
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-bone-400">
                New products, fresh colourways, restocks, and custom builds get posted
                to Instagram first. Follow{" "}
                <span className="font-semibold text-yarn-coral">@{instagramHandle}</span> so
                you don&apos;t miss a drop.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
            <Button href={instagramProfile} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" size={17} />
              Follow @{instagramHandle}
            </Button>
            <Button
              href={shubhamInstagramProfile}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <Heart aria-hidden="true" size={16} />
              Follow the founder
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
