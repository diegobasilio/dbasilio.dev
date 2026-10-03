import { education } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20"
    >
      <Reveal>
        <SectionHeading title={t.education.title} />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {education.map((entry, index) => (
          <Reveal
            key={entry.id}
            delay={index * 80}
            className="rounded-lg border border-border p-6"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted">
              {t.education.levels[entry.level].toUpperCase()}
            </span>
            <h3 className="mt-3 text-base font-semibold text-fg">{entry.degree}</h3>
            <p className="mt-1 text-sm text-muted">{entry.institution}</p>
            <p className="mt-4 font-mono text-xs text-muted">{t.education.status[entry.id]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
