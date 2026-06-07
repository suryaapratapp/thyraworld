import { Heart, Sparkles } from "lucide-react";

export default function AboutFounder() {
  return (
    <section className="section-padding bg-white/54">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="relative">
          <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/80 bg-warm-radial p-6 shadow-soft">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-blush-500 shadow-sm">
              <Heart aria-hidden="true" size={30} />
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blush-500">
              Founder Story
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-clay-700 sm:text-5xl">
              Meet Shubham Salehria
            </h2>
            <p className="mt-5 text-lg leading-8 text-clay-600">
              A brave, creative heart behind Thyra World, turning colour, patience,
              and lived experience into handmade joy.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-peach-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="prose-thyra">
            <p>
              Meet Shubham Salehria, the founder of Thyra World.
            </p>
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
          <div className="mt-8 rounded-3xl bg-peach-50 p-5 text-lg font-bold leading-8 text-clay-700">
            <Sparkles aria-hidden="true" className="mb-3 text-blush-500" size={24} />
            “Thyra World is for everyone who believes that beautiful things can come
            from brave stories.”
          </div>
        </div>
      </div>
    </section>
  );
}
