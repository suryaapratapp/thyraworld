import { Instagram, Mail, MessageCircle } from "lucide-react";
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
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-ink-100 bg-canvas-soft">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-candy-gradient text-lg font-bold text-white shadow-pink">
              T
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink-900">Thyra World</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
                Handmade with love
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-ink-500">
            Handmade crochet bags and accessories by Shubham Salehria — a women-led
            family brand, delivering across India.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={instagramProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-xs font-bold text-ink-500 transition hover:border-candy-pink hover:text-candy-pink"
            >
              <Instagram aria-hidden="true" size={14} />
              @thyraworld
            </a>
            <a
              href={shubhamInstagramProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-xs font-bold text-ink-500 transition hover:border-candy-pink hover:text-candy-pink"
            >
              <Instagram aria-hidden="true" size={14} />
              @shubhamsalehria
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
            Explore
          </p>
          <div className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit text-sm font-semibold text-ink-500 transition hover:text-candy-pink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
            Get in touch
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink-500 transition hover:text-candy-pink"
            >
              <MessageCircle aria-hidden="true" size={16} />
              {whatsappDisplay}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-fit items-center gap-2 break-all text-sm font-semibold text-ink-500 transition hover:text-candy-pink"
            >
              <Mail aria-hidden="true" size={16} />
              {contactEmail}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-100 py-5">
        <div className="shell flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Thyra World. Handmade with love in India.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs font-semibold text-ink-400 transition hover:text-candy-pink">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="text-xs font-semibold text-ink-400 transition hover:text-candy-pink">
              Refund &amp; Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
