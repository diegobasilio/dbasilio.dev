import { journey } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Journey() {
  const { t } = useLanguage();

  return (
    <section
      id="journey"
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20"
    >
      <Reveal>
        <SectionHeading title={t.journey.title} />
      </Reveal>

      <div className="relative mt-12 flex flex-col gap-12">
        {journey.length > 1 && (
          <div className="absolute left-4 top-4 bottom-4 w-px bg-border" aria-hidden="true" />
        )}

        {journey.map((entry, index) => (
          <Reveal key={entry.company} delay={index * 100} className="relative flex gap-6">
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-[10px] tracking-tight text-muted">
              {entry.company.slice(0, 4).toUpperCase()}
            </span>

            <div className="min-w-0 pt-0.5">
              <h3 className="text-lg font-semibold text-fg">{entry.company}</h3>

              <p className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted">
                {entry.roles.map((role, roleIndex) => (
                  <span key={role.title} className="inline-flex items-center gap-1.5">
                    {roleIndex > 0 && <span aria-hidden="true">→</span>}
                    <span className={role.current ? "text-fg" : undefined}>{role.title}</span>
                    {role.current && (
                      <span className="rounded-sm bg-fg px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-bg">
                        {t.journey.current.toUpperCase()}
                      </span>
                    )}
                  </span>
                ))}
              </p>

              <p className="mt-4 max-w-2xl text-balance leading-relaxed text-muted">
                {t.journey.descriptions[entry.company] ?? ""}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
