import { Heart, Instagram } from "lucide-react";
import Button from "./Button.jsx";
import { instagramHandle, instagramProfile, shubhamInstagramProfile } from "../data/site.js";

export default function InstagramSection() {
  return (
    <section className="section-padding">
      <div className="shell">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 animate-blob rounded-full bg-candy-pink/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 animate-blob-slow rounded-full bg-candy-violet/15 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-candy-yellow via-candy-pink to-candy-violet text-white shadow-pink">
                <Instagram aria-hidden="true" size={26} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  Follow us for new designs
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-ink-500">
                  New products, fresh colourways, restocks, and behind-the-scenes reels
                  go to Instagram first. Follow{" "}
                  <span className="font-bold text-candy-pink">@{instagramHandle}</span> so
                  you don&apos;t miss a drop.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
              <Button href={instagramProfile} target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" size={17} />
                Follow @{instagramHandle}
              </Button>
              <Button href={shubhamInstagramProfile} target="_blank" rel="noreferrer" variant="secondary">
                <Heart aria-hidden="true" size={16} />
                Follow the founder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
