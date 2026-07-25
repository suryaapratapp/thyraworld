import { Quote } from "lucide-react";
import ShubhamCharacter from "./ShubhamCharacter.jsx";

export default function AboutFounder() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft" />

      <div className="shell relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative">
          <div className="glass sticky top-24 overflow-hidden p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 animate-drift rounded-full bg-yarn-ember/25 blur-3xl" />
            <div className="relative">
              <ShubhamCharacter className="mx-auto -mt-2 mb-2 w-full max-w-[19rem]" />
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-yarn-coral">
                Founder Story
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-gradient sm:text-5xl">
                Meet Shubham Salehria
              </h2>
              <p className="mt-5 text-base leading-7 text-bone-400">
                Yarn in one hand, phone in the other, laptop open, orders going out —
                turning colour, patience, and lived experience into handmade joy.
              </p>
            </div>
          </div>
        </div>

        <div className="glass p-6 sm:p-9">
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

          <blockquote className="relative mt-9 overflow-hidden rounded-3xl border border-yarn-coral/20 bg-yarn-coral/[0.06] p-6">
            <Quote aria-hidden="true" className="mb-3 text-yarn-coral" size={22} />
            <p className="font-display text-lg font-bold leading-8 text-bone-100">
              “Thyra World is for everyone who believes that beautiful things can come
              from brave stories.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
