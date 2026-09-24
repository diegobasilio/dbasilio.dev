import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20">
      <Reveal>
        <SectionHeading index="05" title={t.howIWork.title} />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {t.howIWork.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 80}>
            <span className="font-mono text-sm text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-medium text-fg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
