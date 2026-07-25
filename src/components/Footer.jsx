import { Instagram, Mail, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  contactEmail,
  createWhatsAppLink,
  instagramProfile,
  shubhamInstagramProfile,
  whatsappDisplay,
} from "../data/site.js";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Design Studio", to: "/studio" },
  { label: "E-books", to: "/ebooks" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const joinLinks = [
  { label: "Work with us as a freelancer", to: "/contact", state: { enquiryType: "Freelance crocheter" } },
  { label: "Learn crochet with us", to: "/contact", state: { enquiryType: "Learn crochet" } },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/[0.07] bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft opacity-70" />

      <div className="shell relative grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-yarn-coral to-yarn-ember text-white shadow-glow-coral">
              <Sparkles aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="font-display text-xl font-bold text-bone-50">Thyra World</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                Handmade with love
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-bone-400">
            Bags, baskets, accessories, cosy essentials, custom creations, and books
            by Shubham Salehria — from a women-led family brand in India.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={instagramProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-bone-300 transition hover:border-white/25 hover:text-bone-50"
            >
              <Instagram aria-hidden="true" size={14} />
              @thyraworld
            </a>
            <a
              href={shubhamInstagramProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-bone-300 transition hover:border-white/25 hover:text-bone-50"
            >
              <Instagram aria-hidden="true" size={14} />
              @shubhamsalehria
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-bone-500">
            Explore
          </p>
          <div className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className="w-fit text-sm font-medium text-bone-400 transition hover:text-yarn-coral"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-bone-500">
            Get in touch
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-bone-300 transition hover:text-yarn-coral"
            >
              <MessageCircle aria-hidden="true" size={16} />
              {whatsappDisplay}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-fit items-center gap-2 break-all text-sm font-semibold text-bone-300 transition hover:text-yarn-coral"
            >
              <Mail aria-hidden="true" size={16} />
              {contactEmail}
            </a>
          </div>

          <p className="mb-3 mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-bone-500">
            Join us
          </p>
          <div className="flex flex-col gap-2.5">
            {joinLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                state={link.state}
                className="w-fit text-sm font-medium text-bone-400 transition hover:text-yarn-sage"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.06] py-5">
        <div className="shell flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-bone-500">
            © {new Date().getFullYear()} Thyra World. Handmade with love in India.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs font-medium text-bone-500 transition hover:text-yarn-coral"
            >
              Privacy Policy
            </Link>
            <Link
              to="/refund-policy"
              className="text-xs font-medium text-bone-500 transition hover:text-yarn-coral"
            >
              Refund &amp; Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
