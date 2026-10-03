import { useState } from "react";
import { profile } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { GithubIcon, LinkedinIcon, MapPinIcon } from "../components/Icons";

// Reserved photo slot: drop a file at `public/profile.jpg` and it appears
// here automatically — no layout or code changes needed. Until then, this
// falls back to a placeholder with the same fixed size.
function HeroPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="animate-fade-in h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-surface">
      {!failed ? (
        <img
          src="/profile.jpg"
          alt={profile.name}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted">
          DB
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col px-6 pb-24 pt-20 sm:pt-28">
      <HeroPhoto />

      <p
        className="animate-fade-in mt-8 font-mono text-sm tracking-[0.2em] text-muted"
        style={{ animationDelay: "40ms" }}
      >
        {t.hero.role.toUpperCase()}
      </p>

      <h1
        className="animate-fade-in mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.name}
      </h1>

      <blockquote
        className="animate-fade-in mt-6 max-w-2xl border-l border-border pl-5"
        style={{ animationDelay: "160ms" }}
      >
        <p className="text-balance text-lg text-muted sm:text-xl">
          &ldquo;{t.hero.tagline}&rdquo;
        </p>
        <cite className="mt-2 block font-mono text-xs not-italic tracking-wide text-muted/70">
          — Alan Turing
        </cite>
      </blockquote>

      <div
        className="animate-fade-in mt-8 flex items-center gap-2 text-sm text-muted"
        style={{ animationDelay: "260ms" }}
      >
        <MapPinIcon className="h-4 w-4" />
        <span>{profile.location}</span>
      </div>

      <div
        className="animate-fade-in mt-10 flex items-center gap-4 text-muted"
        style={{ animationDelay: "320ms" }}
      >
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
      </div>
    </section>
  );
}
