import { profile } from "../data/portfolio";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={profile.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-fg shadow-lg shadow-black/40 transition-colors hover:border-accent hover:text-accent"
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}
