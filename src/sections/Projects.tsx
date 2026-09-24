import { projects } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowUpRightIcon } from "../components/Icons";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-20"
    >
      <Reveal>
        <SectionHeading index="03" title={t.projects.title} />
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-border">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80} className="py-8 first:pt-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-xl font-medium text-fg">{project.name}</h3>
                <p className="mt-3 text-balance leading-relaxed text-muted">
                  {t.projects.descriptions[project.name] ?? ""}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-muted">
                      {tech}
                      <span className="mx-2 text-border last:hidden" aria-hidden="true">
                        /
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {t.projects.viewCode}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {t.projects.liveDemo}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {!project.githubUrl && !project.demoUrl && (
                  <span className="font-mono text-xs text-muted">
                    {t.projects.privateProject}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
