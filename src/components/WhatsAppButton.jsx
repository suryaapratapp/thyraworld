import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../data/site.js";

export default function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.42)] transition duration-300 hover:scale-110"
      aria-label="Chat with Thyra World on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={24} />
    </a>
  );
}
