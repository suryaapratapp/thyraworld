import { Quote } from "lucide-react";

export default function AboutFounder() {
  return (
    <section className="section-padding">
      <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="card sticky top-24 relative overflow-hidden p-6 text-center">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 animate-blob rounded-full bg-candy-pink/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 animate-blob-slow rounded-full bg-candy-mint/15 blur-3xl" />

            <img
              src="/images/shubham-character.png"
              alt="Illustration of Shubham Salehria carrying a handmade crochet bag, a notebook, yarn, and a crochet hook"
              className="relative mx-auto w-full max-w-[17rem] animate-float"
              loading="lazy"
            />

            <p className="relative mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-candy-pink">
              Founder Story
            </p>
            <h2 className="relative mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl">
              Meet Shubham Salehria
            </h2>
            <p className="relative mt-4 text-sm leading-7 text-ink-500">
              Turning colour, patience, and lived experience into handmade joy.
            </p>
          </div>
        </div>

        <div className="card p-6 sm:p-9">
          <div className="prose-thyra">
            <p>Meet Shubham Salehria, the founder of Thyra World.</p>
            <p>
              Shubham is a 32-year-old woman with a story that did not exactly come
              with an “easy mode” setting. Since childhood, hospitals, appointments,
              discomfort, and health challenges were regular visitors in her life —
              basically the kind of guests nobody invites, but they still keep showing up.
            </p>
            <p>
              She grew up living with scoliosis, asthma, and hyperhidrosis. Each condition
              brought its own challenges, and together they shaped her childhood and teenage
              years in ways that were often difficult, tiring, and emotionally heavy.
            </p>
            <p>
              There were days when even trying to fit in felt like a full-time job. While
              other people seemed to move through ordinary life effortlessly, Shubham often
              had to plan, adjust, gather courage, and then still smile like everything was
              fine. Behind that smile were fears, doubts, and questions that many people
              never saw.
            </p>
            <p>
              Eventually, she underwent spinal fusion surgery to correct her scoliosis. The
              surgery brought positive changes. It gave her more stability, confidence, and
              freedom. But healing was not a one-day miracle. It was a long journey — and
              not the glamorous Instagram transformation kind with perfect lighting and
              background music.
            </p>
            <p>
              The physical recovery was one part. The emotional recovery took much longer.
              Living with health challenges affected her mental health too. There were
              moments of anxiety, self-doubt, frustration, loneliness, and wondering whether
              her body and life were moving at the same speed as everyone else’s.
            </p>
            <p>
              But through all of this, Shubham carried something very powerful: her positive
              approach to life.
            </p>
            <p>
              She has always been emotional, sensitive, and deeply connected to both the
              difficult and beautiful parts of life. Instead of letting challenges make her
              bitter, she slowly turned them into creativity, patience, and strength.
            </p>
            <p>And that is how Thyra World was born.</p>
            <p>
              Thyra World is not just about handmade products. It is about creating
              something beautiful with your hands, even when life has not always been gentle.
              It is about colour after chaos, softness after struggle, and joy stitched into
              everyday things.
            </p>
            <p>
              Every product carries a little bit of that spirit — handmade, heartfelt,
              imperfectly perfect, and created with love.
            </p>
          </div>

          <blockquote className="mt-8 rounded-3xl border border-candy-pink/20 bg-candy-pink/[0.06] p-6">
            <Quote aria-hidden="true" className="mb-3 text-candy-pink" size={22} />
            <p className="font-display text-lg font-bold leading-8 text-ink-900">
              “Thyra World is for everyone who believes that beautiful things can come
              from brave stories.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
