import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Design Studio", to: "/studio", highlight: true },
  { label: "E-books", to: "/ebooks" },
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
    `relative rounded-full px-3.5 py-2 text-[13px] font-semibold transition ${
      isActive
        ? "bg-white/[0.09] text-bone-50"
        : "text-bone-400 hover:bg-white/[0.05] hover:text-bone-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-ink-900/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-3.5">
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          aria-label="Thyra World home"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yarn-coral to-yarn-ember text-white shadow-glow-coral">
            <Sparkles aria-hidden="true" size={19} />
          </span>
          <span>
            <span className="block font-display text-lg font-bold leading-none tracking-tight text-bone-50">
              Thyra World
            </span>
            <span className="mt-0.5 block font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-bone-500">
              Handmade · India
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
              {item.highlight && (
                <span className="ml-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-yarn-sage align-middle" />
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/studio" className="px-4 py-2.5 text-[13px]">
            <Sparkles aria-hidden="true" size={15} />
            Customise
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-bone-200 transition hover:border-white/25 lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/[0.07] bg-ink-900/97 backdrop-blur-xl lg:hidden">
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
            <Button to="/studio" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              <Sparkles aria-hidden="true" size={16} />
              Customise
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
