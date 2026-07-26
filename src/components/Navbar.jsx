import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import { createWhatsAppLink } from "../data/site.js";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive
        ? "bg-candy-pink/10 text-candy-pink"
        : "text-ink-500 hover:bg-ink-100 hover:text-ink-900"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition duration-300 ${
        scrolled ? "border-b border-ink-100 bg-white/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-3.5">
        <NavLink
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Thyra World home"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/thyra-mark.png"
            alt=""
            className="h-10 w-auto"
            width="66"
            height="40"
          />
          <span>
            <span className="block font-display text-lg font-bold leading-none text-ink-900">
              Thyra World
            </span>
            <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
              Handmade · India
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 text-[13px]"
          >
            <MessageCircle aria-hidden="true" size={15} />
            Enquire
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-candy-pink md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <div className="shell flex flex-col gap-1.5 py-4">
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
            >
              <MessageCircle aria-hidden="true" size={16} />
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
