import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20">
      <Reveal>
        <SectionHeading index="01" title={t.about.title} />
        <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted">
          {t.about.paragraph}
        </p>
      </Reveal>
    </section>
  );
}
