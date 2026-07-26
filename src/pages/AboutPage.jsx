import { HeartHandshake, MapPin, Palette, Users } from "lucide-react";
import AboutFounder from "../components/AboutFounder.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import JoinSection from "../components/JoinSection.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const values = [
  {
    title: "Love and patience",
    description:
      "Each product is handmade with care, colour, and the small details that make handmade feel personal.",
    icon: HeartHandshake,
    accent: "#FF4D8D",
  },
  {
    title: "Custom creativity",
    description:
      "Listed categories and other customer ideas can be customised to your requirements.",
    icon: Palette,
    accent: "#7C3AED",
  },
  {
    title: "Across India",
    description:
      "We deliver handmade products across India and answer every enquiry personally.",
    icon: MapPin,
    accent: "#06D6A0",
  },
  {
    title: "Women-led dream",
    description:
      "Run by women from the same family, with a vision to support and hire more women.",
    icon: Users,
    accent: "#FFD60A",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero" />

      <section className="section-padding">
        <div className="shell">
          <SectionHeader
            eyebrow="About Us"
            title="A women-led handmade brand built with love, patience, and colour"
            description="Thyra World creates handmade and customisable products that feel warm, useful, personal, and gifting-ready."
          />

          <div className="card p-6 sm:p-9 lg:p-12">
            <div className="prose-thyra">
              <p>
                Thyra World is a handmade brand created with love, patience, colour, and
                a little bit of everyday madness. We make bags, baskets, coasters, mug
                cozies, scrunchies, kumihimo, AirPod cases, headbands, lip balm holders,
                bookmarks, pouches, and many more custom creations.
              </p>
              <p>
                Everything is handmade with care. We deliver products across India and
                also create customised products across all listed categories and other
                categories as per customer requirements.
              </p>
              <p>
                At present, Thyra World is run by women from the same family. Our dream
                is to grow this into a platform that supports and hires more women in the
                future, giving them creative work, financial independence, and a happy
                space to build something of their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="card card-hover p-6">
                  <span
                    className="mb-4 flex items-center justify-center rounded-2xl"
                    style={{
                      background: `${value.accent}1A`,
                      color: value.accent,
                      height: 48,
                      width: 48,
                    }}
                  >
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h2 className="font-display text-lg font-bold text-ink-900">
                    {value.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AboutFounder />
      <JoinSection />
      <ContactCTA title="Have a custom handmade idea?" />
    </div>
  );
}
