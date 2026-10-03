/**
 * All editable portfolio data lives in this single file.
 * Bilingual text (labels, descriptions) lives in `src/i18n/pt.ts` and `src/i18n/en.ts` instead.
 */

export const profile = {
  name: "Diego Basilio",
  // Shown as the logo/wordmark in the navbar.
  brand: "dbasilio.dev",
  location: "São Paulo, Brazil",
  whatsapp: {
    // Displayed number.
    display: "+55 11 94152-7358",
    // Pre-filled wa.me link used by every WhatsApp CTA on the site.
    url: "https://wa.me/5511941527358?text=Ol%C3%A1%20Diego%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
  },
  linkedin: "https://www.linkedin.com/in/diegobasilio10/",
  github: "https://github.com/diegobasilio",
  email: "diegobasilio10@gmail.com",
};

export type ExperienceEntry = {
  // Stable key used to look up period/description in
  // src/i18n/pt.ts and en.ts (journey.entries[id]).
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
};

// Most recent first.
export const experience: ExperienceEntry[] = [
  {
    id: "vbs",
    title: "Desenvolvedor de Software Full Stack",
    company: "VBS",
    companyUrl: "https://www.vbsall.com.br/",
    location: "São Paulo, Brazil",
  },
  // Add new positions here — same shape as above. The period/description
  // text lives in `journey.entries` in src/i18n/pt.ts and en.ts.
];

export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  level: "higher" | "technical";
};

export const education: EducationEntry[] = [
  {
    id: "cruzeiro-sul",
    institution: "Universidade Cruzeiro do Sul",
    degree: "Análise e Desenvolvimento de Sistemas",
    level: "higher",
  },
  {
    id: "etec",
    institution: "ETEC Professor Camargo Aranha",
    degree: "Técnico em Desenvolvimento de Sistemas",
    level: "technical",
  },
  // Add new education entries here — same shape as above. The status text
  // (e.g. "Completed in 2024") lives in `education.status` in pt.ts and en.ts.
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

// Day-to-day highlights, shown as a single row of badges — not an
// exhaustive list. Add or remove freely.
export const techStack: string[] = [
  "C#",
  ".NET",
  "Blazor",
  "REST APIs",
  "JavaScript",
  "Azure DevOps",
  "Oracle PL/SQL",
  "Docker",
  "Git",
];
