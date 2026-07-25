import { ArrowRight, GraduationCap, Scissors, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader.jsx";

/**
 * Two recruitment tracks in one section: freelance crocheters who want paid
 * work, and beginners who want to learn. Both deep-link into the contact form
 * with the right intent pre-selected via router state.
 */
const tracks = [
  {
    id: "freelance",
    eyebrow: "Work with us",
    title: "Love crocheting? Turn it into income.",
    body: "If you crochet — whether that's bags, coasters, amigurumi, or anything in between — we'd love to hear from you. Thyra World is growing, and we want to bring on freelance makers who care about their craft as much as we do. Work from home, at your own pace, on the kind of pieces you actually enjoy making.",
    points: [
      "Work from anywhere in India, on your own schedule",
      "Take on as much or as little as fits your week",
      "Fair, transparent pay for every piece",
      "Beginners with real enthusiasm are welcome too",
    ],
    cta: "Apply as a freelancer",
    state: { enquiryType: "Freelance crocheter" },
    icon: Scissors,
    accent: "#A78BFA",
    glow: "shadow-glow-violet",
  },
  {
    id: "learn",
    eyebrow: "Learn with us",
    title: "Always wanted to learn? Start here.",
    body: "We're putting together crochet lessons and a proper little community around them — a place to learn the basics, ask questions without feeling silly, share what you've made, and make friends who light up about yarn the way you do. Sessions begin as soon as enough people have joined the waitlist, so add your name and we'll reach out.",
    points: [
      "Complete beginners genuinely welcome — start from zero",
      "Online, or in person around Chandigarh and Nahan",
      "A community to share progress and swap patterns",
      "We start once there's a group in your area or timezone",
    ],
    cta: "Join the waitlist",
    state: { enquiryType: "Learn crochet" },
    icon: GraduationCap,
    accent: "#4ECDC4",
    glow: "shadow-glow-sage",
  },
];

export default function JoinSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="shell relative">
        <SectionHeader
          eyebrow="Join Thyra World"
          icon={Users}
          title="There's room here for you"
          description="Two ways to be part of what we're building — whether you already crochet, or you've been meaning to learn for years."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.id}
                className="glass glass-hover group relative flex flex-col overflow-hidden p-6 sm:p-8"
              >
                <span
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl transition duration-700 group-hover:opacity-35"
                  style={{ background: track.accent }}
                />

                <div className="relative">
                  <span
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${track.glow}`}
                    style={{ background: `${track.accent}1A`, color: track.accent }}
                  >
                    <Icon aria-hidden="true" size={25} />
                  </span>

                  <p
                    className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: track.accent }}
                  >
                    {track.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl font-bold leading-tight text-bone-50 sm:text-3xl">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-bone-400">{track.body}</p>

                  <ul className="mt-6 space-y-2.5">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Sparkles
                          aria-hidden="true"
                          size={14}
                          className="mt-1 shrink-0"
                          style={{ color: track.accent }}
                        />
                        <span className="text-sm leading-6 text-bone-300">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    state={track.state}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: `${track.accent}66`,
                      background: `${track.accent}14`,
                      color: track.accent,
                    }}
                  >
                    {track.cta}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
