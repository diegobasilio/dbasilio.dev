import { profile } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowUpRightIcon } from "../components/Icons";

const secondaryLinks = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Instagram", href: profile.instagram },
];

export function Contact() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-24"
    >
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-4 max-w-md text-balance text-muted">{t.contact.subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            {t.contact.cta}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>

          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm text-fg transition-colors hover:border-fg hover:bg-fg hover:text-bg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-16 font-mono text-xs text-muted">
          © {year} {profile.name} — {profile.location}
        </p>
      </Reveal>
    </section>
  );
}
