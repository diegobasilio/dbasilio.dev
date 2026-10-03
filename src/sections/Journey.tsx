import { experience } from "../data/portfolio";
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

      <div className="mt-10 flex flex-col gap-10">
        {experience.map((entry, index) => {
          const data = t.journey.entries[entry.id];

          return (
            <Reveal key={entry.id} delay={index * 100} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-[10px] tracking-tight text-muted">
                {entry.company.slice(0, 4).toUpperCase()}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-fg">{entry.title}</h3>
                  <span className="font-mono text-xs text-muted">{data.period}</span>
                </div>

                <p className="mt-1 text-sm text-muted">
                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-fg"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    entry.company
                  )}{" "}
                  · {entry.location}
                </p>

                <p className="mt-4 max-w-2xl text-balance leading-relaxed text-muted">
                  {data.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
