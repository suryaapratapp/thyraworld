import { Instagram, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createWhatsAppLink, instagramProfile, shubhamInstagramProfile } from "../data/products.js";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "E-books", to: "/ebooks" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-peach-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-peach-100 text-blush-500">
              <Sparkles aria-hidden="true" size={21} />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-clay-700">Thyra World</p>
              <p className="text-sm text-clay-500">Handmade with love across India</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-clay-500">
            Bags, baskets, accessories, cosy essentials, custom creations, and books
            by Shubham Salehria from a women-led family brand.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-blush-500">
            Explore
          </p>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-clay-500 transition hover:text-blush-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-blush-500">
            Connect
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition hover:text-blush-500"
            >
              <MessageCircle aria-hidden="true" size={18} />
              WhatsApp +91 8894303410
            </a>
            <a
              href={instagramProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition hover:text-blush-500"
            >
              <Instagram aria-hidden="true" size={18} />
              @thyraworld
            </a>
            <a
              href={shubhamInstagramProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition hover:text-blush-500"
            >
              <Instagram aria-hidden="true" size={18} />
              @shubhamsalehria
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-peach-100 px-4 py-4 text-center text-xs font-medium leading-6 text-clay-400">
        © {new Date().getFullYear()} Thyra World. Handmade with love in India.
        <span className="mx-auto mt-1 block max-w-2xl">
          WhatsApp is used for product enquiries, custom orders, and purchase assistance.
        </span>
      </div>
    </footer>
  );
}
