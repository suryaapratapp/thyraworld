import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import StudioPage from "./pages/StudioPage.jsx";
import EbooksPage from "./pages/EbooksPage.jsx";
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
  "/studio": {
    title: "Design Studio | Thyra World",
    description:
      "Love one of our pieces but want it in different colours? Preview any Thyra World bag in our yarn palette and send us your customisation.",
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
  "/ebooks": {
    title: "E-books | Thyra World",
    description:
      "Explore thoughtful, emotional, and inspiring books authored by Shubham Salehria.",
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
    // Deep links from the Design Studio and Join Us cards carry router state and
    // scroll themselves to the form — don't yank the page back to the top.
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

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900 text-bone-100">
      <ScrollAndMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
