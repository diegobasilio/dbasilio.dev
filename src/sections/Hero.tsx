import { profile } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MapPinIcon, WhatsAppIcon } from "../components/Icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col px-6 pb-24 pt-20 sm:pt-28">
      <p className="animate-fade-in font-mono text-sm tracking-[0.2em] text-accent">
        {t.hero.role.toUpperCase()}
      </p>

      <h1
        className="animate-fade-in mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.name}
      </h1>

      <p
        className="animate-fade-in mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl"
        style={{ animationDelay: "160ms" }}
      >
        &ldquo;{t.hero.tagline}&rdquo;
      </p>

      <p
        className="animate-fade-in mt-4 max-w-xl text-balance text-base text-muted"
        style={{ animationDelay: "220ms" }}
      >
        {t.hero.description}
      </p>

      <div
        className="animate-fade-in mt-6 flex items-center gap-2 text-sm text-muted"
        style={{ animationDelay: "280ms" }}
      >
        <MapPinIcon className="h-4 w-4" />
        <span>{profile.location}</span>
      </div>

      <div
        className="animate-fade-in mt-10 flex flex-wrap items-center gap-4"
        style={{ animationDelay: "340ms" }}
      >
        <a
          href={profile.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          {t.hero.cta}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>

        <div className="flex items-center gap-4 text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-fg"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
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
            href={profile.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-colors hover:text-fg"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
