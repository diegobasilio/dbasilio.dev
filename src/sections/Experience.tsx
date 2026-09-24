import { experience } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20"
    >
      <Reveal>
        <SectionHeading index="02" title={t.experience.title} />
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <h3 className="text-xl font-medium text-fg">{experience.company}</h3>

        <ol className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
          {experience.steps.map((step, index) => (
            <li key={step.title} className="flex items-center gap-4 sm:flex-1">
              <div className="flex flex-1 items-center gap-3">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    step.current ? "bg-accent" : "bg-border"
                  }`}
                  aria-hidden="true"
                />
                <span className={`text-sm ${step.current ? "text-fg" : "text-muted"}`}>
                  {step.title}
                  {step.current && (
                    <span className="ml-2 font-mono text-xs text-accent">
                      {t.experience.current.toUpperCase()}
                    </span>
                  )}
                </span>
              </div>

              {index < experience.steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={160} className="mt-12">
        <h4 className="font-mono text-xs tracking-[0.15em] text-muted">
          {t.experience.focusTitle.toUpperCase()}
        </h4>
        <ul className="mt-4 flex flex-wrap gap-2">
          {t.experience.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
            >
              {area}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
