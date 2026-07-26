import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import CommunityPopup from "./components/CommunityPopup.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { PrivacyPolicyPage, RefundPolicyPage } from "./pages/PolicyPage.jsx";

const pageMeta = {
  "/": {
    title: "Thyra World | Handmade Crochet Bags & Accessories",
    description:
      "Handmade crochet bags, baskets, accessories, and cosy essentials by Shubham Salehria. Every piece made by hand, and customisable in your colours. Delivered across India.",
  },
  "/products": {
    title: "Products | Thyra World",
    description:
      "Browse handmade bags, baskets, coasters, mug cozies, scrunchies, kumihimo, AirPod cases, headbands, pouches, and more.",
  },
  "/privacy": {
    title: "Privacy Policy | Thyra World",
    description:
      "How Thyra World collects, uses, and protects your information. We collect as little as we can and never sell your details.",
  },
  "/refund-policy": {
    title: "Refund & Cancellation Policy | Thyra World",
    description:
      "Thyra World's order, cancellation, and refund terms. Cancel within 24 hours of order confirmation for a full refund; after that, 50% is deducted.",
  },
  "/about": {
    title: "About Us | Thyra World",
    description:
      "Meet Thyra World, a women-led family handmade brand delivering custom crochet products across India.",
  },
  "/contact": {
    title: "Contact Us | Thyra World",
    description:
      "Contact Thyra World for custom orders, freelance crochet work, or to join the crochet learning community.",
  },
};

function ScrollAndMeta() {
  const location = useLocation();

  useEffect(() => {
    // Join Us cards deep-link with router state and scroll themselves to the
    // form — don't yank the page back to the top.
    const isDeepLink = Boolean(location.state?.enquiryType || location.state?.message);
    if (!isDeepLink) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const meta = pageMeta[location.pathname] || pageMeta["/"];
    document.title = meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = meta.description;
  }, [location.pathname, location.state]);

  return null;
}

function NotFoundPage() {
  return (
    <section className="section-padding">
      <div className="shell">
        <div className="card mx-auto max-w-xl p-10 text-center">
          <p className="font-display text-5xl font-bold text-candy">404</p>
          <h1 className="mt-3 font-display text-2xl font-bold text-ink-900">
            This page doesn&apos;t exist
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-500">
            It may have moved or been removed. Everything we make is over on the
            products page.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-candy-gradient px-5 py-3 text-sm font-bold text-white shadow-pink transition hover:-translate-y-0.5"
            >
              Browse products
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-bold text-ink-900 transition hover:border-candy-pink hover:text-candy-pink"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink-900">
      <ScrollAndMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          {/* Catches old /studio and /ebooks bookmarks so they don't render blank */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CommunityPopup />
    </div>
  );
}
