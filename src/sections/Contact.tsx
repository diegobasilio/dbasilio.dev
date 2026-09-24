import { profile } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "../components/Icons";

export function Contact() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-24"
    >
      <Reveal className="flex flex-col items-start">
        <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-tight text-fg sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-4 max-w-md text-balance text-muted">{t.contact.subtitle}</p>

        <a
          href={profile.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          {t.contact.cta}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>

        <div className="mt-8 flex items-center gap-5 text-muted">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-fg"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-fg"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </Reveal>

      <div className="mt-24 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
        <span>
          © {year} {profile.name}
        </span>
        <span>{t.footer.builtWith}</span>
      </div>
    </section>
  );
}
