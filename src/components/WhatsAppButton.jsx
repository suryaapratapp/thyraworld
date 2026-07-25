import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../data/site.js";

export default function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Enquire on WhatsApp"
      title="Enquire on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <MessageCircle aria-hidden="true" size={24} className="relative" />
    </a>
  );
}
