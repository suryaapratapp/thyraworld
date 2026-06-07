import { Instagram } from "lucide-react";
import Button from "./Button.jsx";
import { instagramProfile } from "../data/products.js";

export default function InstagramButton({ label = "Visit @thyraworld", className = "" }) {
  return (
    <Button
      href={instagramProfile}
      target="_blank"
      rel="noreferrer"
      variant="secondary"
      className={className}
    >
      <Instagram aria-hidden="true" size={18} />
      {label}
    </Button>
  );
}
