/**
 * All editable portfolio data lives in this single file.
 * Bilingual text (labels, descriptions) lives in `src/i18n/pt.ts` and `src/i18n/en.ts` instead.
 */

export const profile = {
  name: "Diego Basilio",
  location: "São Paulo, Brazil",
  whatsapp: {
    // Displayed number.
    display: "+55 11 94152-7358",
    // Pre-filled wa.me link used by every WhatsApp CTA on the site.
    url: "https://wa.me/5511941527358?text=Ol%C3%A1%20Diego%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
  },
  linkedin: "https://www.linkedin.com/in/diegobasilio10/",
  instagram: "https://www.instagram.com/_diegobasilio/",
  github: "https://github.com/diegobasilio",
  email: "diegobasilio10@gmail.com",
};

export type JourneyRole = {
  title: string;
  current?: boolean;
};

export type JourneyEntry = {
  company: string;
  // Career progression at this company, oldest first.
  roles: JourneyRole[];
};

export const journey: JourneyEntry[] = [
  {
    company: "VBS",
    roles: [
      { title: "Desenvolvedor Júnior" },
      { title: "Desenvolvedor Júnior II" },
      { title: "Desenvolvedor Júnior III" },
      { title: "Desenvolvedor Pleno", current: true },
    ],
  },
  // Add new companies here — same shape as above. The description text for
  // each company's card lives in `journey.descriptions` in src/i18n/pt.ts and en.ts.
];

export type Project = {
  name: string;
  stack: string[];
  // Set to null while there's no public link yet — the UI hides the button.
  githubUrl: string | null;
  demoUrl: string | null;
};

export const projects: Project[] = [
  {
    name: "CEI Clarêncio",
    stack: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    githubUrl: null,
    demoUrl: null,
  },
  // Add new projects here — same shape as above.
];

export type TechCategory = {
  key: "backend" | "frontend" | "database" | "devops";
  items: string[];
};

export const techStack: TechCategory[] = [
  { key: "backend", items: ["C#", ".NET", "ASP.NET", "REST APIs"] },
  { key: "frontend", items: ["Blazor", "Razor", "JavaScript", "HTML", "CSS"] },
  { key: "database", items: ["Oracle", "PL/SQL", "PostgreSQL"] },
  { key: "devops", items: ["Git", "GitHub", "Azure DevOps", "Docker", "CI/CD"] },
];
