import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../data/products.js";

export default function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.34)] transition hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(37,211,102,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      aria-label="Enquire on WhatsApp"
      title="Enquire on WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={24} />
    </a>
  );
}
