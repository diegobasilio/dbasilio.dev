import { techStack } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20">
      <Reveal>
        <SectionHeading title={t.techStack.title} />
      </Reveal>

      <Reveal delay={80} className="mt-10 flex flex-wrap gap-3">
        {techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-4 py-2 text-sm text-fg"
          >
            {item}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
