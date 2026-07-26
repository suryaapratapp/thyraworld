import { ArrowRight, GraduationCap, Scissors, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader.jsx";

/**
 * Two recruitment tracks: freelance crocheters who want paid work, and
 * beginners who want to learn. Both deep-link into the contact form with the
 * right intent pre-selected via router state.
 */
const tracks = [
  {
    id: "freelance",
    eyebrow: "Work with us",
    title: "Love crocheting? Turn it into income.",
    body: "If you crochet — bags, coasters, amigurumi, anything — we'd love to hear from you. Work from home, at your own pace, on pieces you actually enjoy making.",
    points: [
      "Work from anywhere in India, on your own schedule",
      "Take on as much or as little as fits your week",
      "Fair, transparent pay for every piece",
    ],
    cta: "Apply as a freelancer",
    state: { enquiryType: "Freelance crocheter" },
    icon: Scissors,
    accent: "#7C3AED",
  },
  {
    id: "learn",
    eyebrow: "Learn with us",
    title: "Always wanted to learn? Start here.",
    body: "We're putting together crochet lessons and a little community around them — a place to learn the basics, ask questions, and make friends who love yarn as much as you do.",
    points: [
      "Complete beginners genuinely welcome",
      "Online, or in person around Chandigarh and Nahan",
      "We start once there's a group in your area",
    ],
    cta: "Join the waitlist",
    state: { enquiryType: "Learn crochet" },
    icon: GraduationCap,
    accent: "#06D6A0",
  },
];

export default function JoinSection() {
  return (
    <section className="section-padding">
      <div className="shell">
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
              <article key={track.id} className="card card-hover flex flex-col p-6 sm:p-8">
                <span
                  className="mb-5 flex items-center justify-center rounded-2xl"
                  style={{ background: `${track.accent}1A`, color: track.accent, height: 52, width: 52 }}
                >
                  <Icon aria-hidden="true" size={24} />
                </span>

                <p
                  className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: track.accent }}
                >
                  {track.eyebrow}
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{track.body}</p>

                <ul className="mt-5 space-y-2">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: track.accent }}
                      />
                      <span className="text-sm leading-6 text-ink-500">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  state={track.state}
                  className="mt-7 inline-flex w-fit items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5"
                  style={{ background: track.accent }}
                >
                  {track.cta}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
