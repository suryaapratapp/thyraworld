import { HeartHandshake, MapPin, Palette, Users } from "lucide-react";
import AboutFounder from "../components/AboutFounder.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const values = [
  {
    title: "Love and patience",
    description:
      "Each product is handmade with care, colour, and the small details that make handmade feel personal.",
    icon: HeartHandshake,
  },
  {
    title: "Custom creativity",
    description:
      "Listed categories and other customer ideas can be customised according to requirements.",
    icon: Palette,
  },
  {
    title: "Across India",
    description:
      "Thyra World delivers handmade products across India and supports enquiries through WhatsApp.",
    icon: MapPin,
  },
  {
    title: "Women-led dream",
    description:
      "Run by women from the same family, with a future vision to support and hire more women.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-warm-radial">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Us"
            title="A women-led handmade brand built with love, patience, colour, and everyday madness"
            description="Thyra World creates handmade and customisable products that feel warm, useful, personal, and gifting-ready."
          />

          <div className="rounded-3xl border border-peach-100 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
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

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-peach-100 bg-white p-5 shadow-soft"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-peach-100 text-blush-500">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h2 className="text-lg font-bold text-clay-700">{value.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-clay-500">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AboutFounder />
      <ContactCTA title="Have a custom handmade idea?" />
    </>
  );
}
