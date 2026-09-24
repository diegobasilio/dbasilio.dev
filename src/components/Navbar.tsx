import { useState } from "react";
import { profile } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { CloseIcon, MenuIcon } from "./Icons";

const sections = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "stack", key: "stack" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.2em] text-fg"
          onClick={() => setOpen(false)}
        >
          {profile.name.toUpperCase()}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {t.nav[section.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitch language={language} setLanguage={setLanguage} />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-fg md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="py-2 text-sm text-muted transition-colors hover:text-fg"
              onClick={() => setOpen(false)}
            >
              {t.nav[section.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function LanguageSwitch({
  language,
  setLanguage,
}: {
  language: "en" | "pt";
  setLanguage: (language: "en" | "pt") => void;
}) {
  return (
    <div className="flex items-center gap-1 font-mono text-xs tracking-wide text-muted">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={language === "pt" ? "text-fg" : "transition-colors hover:text-fg"}
        aria-pressed={language === "pt"}
      >
        PT
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={language === "en" ? "text-fg" : "transition-colors hover:text-fg"}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
