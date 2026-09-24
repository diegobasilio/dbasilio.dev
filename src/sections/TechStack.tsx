import { techStack } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20">
      <Reveal>
        <SectionHeading index="04" title={t.techStack.title} />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((category, index) => (
          <Reveal key={category.key} delay={index * 80}>
            <h3 className="font-mono text-xs tracking-[0.15em] text-accent">
              {t.techStack.categories[category.key].toUpperCase()}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {category.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
