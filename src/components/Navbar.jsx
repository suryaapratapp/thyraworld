import { Menu, MessageCircle, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/products.js";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "E-books", to: "/ebooks" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-white text-blush-500 shadow-sm"
        : "text-clay-700 hover:bg-white/70 hover:text-blush-500"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-peach-50/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blush-200"
          aria-label="Thyra World home"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blush-500 shadow-soft">
            <ShoppingBag aria-hidden="true" size={22} />
          </span>
          <span>
            <span className="block font-display text-2xl font-bold leading-none text-clay-700">
              Thyra World
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blush-400">
              Handmade India
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="Enquire with Thyra World on WhatsApp"
          >
            <MessageCircle aria-hidden="true" size={18} />
            Enquire on WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-clay-700 shadow-soft transition hover:text-blush-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blush-200 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/70 bg-peach-50/95 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full"
            aria-label="Enquire with Thyra World on WhatsApp"
          >
            <MessageCircle aria-hidden="true" size={18} />
            Enquire on WhatsApp
          </Button>
          </div>
        </div>
      )}
    </header>
  );
}
