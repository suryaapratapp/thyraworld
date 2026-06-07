import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import EbooksPage from "./pages/EbooksPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const pageMeta = {
  "/": {
    title: "Thyra World | Handmade Products Across India",
    description:
      "Discover handmade bags, baskets, accessories, cosy essentials, custom creations, and books by Shubham Salehria from Thyra World.",
  },
  "/products": {
    title: "Products | Thyra World",
    description:
      "Browse handmade bags, baskets, coasters, mug cozies, scrunchies, kumihimo, AirPod cases, headbands, pouches, and more.",
  },
  "/ebooks": {
    title: "E-books | Thyra World",
    description:
      "Explore thoughtful, emotional, and inspiring books authored by Shubham Salehria.",
  },
  "/about": {
    title: "About Us | Thyra World",
    description:
      "Meet Thyra World, a women-led family handmade brand delivering custom products across India.",
  },
  "/contact": {
    title: "Contact Us | Thyra World",
    description:
      "Contact Thyra World on WhatsApp or Instagram for custom handmade products delivered across India.",
  },
};

function ScrollAndMeta() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const meta = pageMeta[location.pathname] || pageMeta["/"];
    document.title = meta.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = meta.description;
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-peach-50 text-clay-700">
      <ScrollAndMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
