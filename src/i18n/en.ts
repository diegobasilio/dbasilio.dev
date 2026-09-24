import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
  },
  hero: {
    role: "Software Engineer — Full Stack Developer",
    tagline: "Building software that solves real problems.",
    description:
      "Full Stack Developer focused on building production web applications and financial systems.",
    cta: "Let's talk",
  },
  about: {
    title: "About",
    paragraph:
      "I'm a Full Stack Developer with 3+ years of experience building web applications and financial systems. My work spans backend and frontend — from REST APIs to modern interfaces — including the modernization of legacy systems.",
  },
  experience: {
    title: "Experience",
    current: "Current",
    focusTitle: "Focus areas",
    focusAreas: [
      "Requirements & business rule analysis",
      "Technical solution design",
      "Full-stack development — APIs, frontend & backend",
      "Testing, staging & deploy",
      "Production troubleshooting & root cause analysis",
      "Mentoring junior developers",
      "Legacy system modernization",
    ],
  },
  projects: {
    title: "Selected Projects",
    descriptions: {
      "CEI Clarêncio":
        "Internal management system for a phytotherapy clinic, with a REST API built on ASP.NET Core and a React front end.",
    },
    viewCode: "Code",
    liveDemo: "Demo",
    privateProject: "Private project",
  },
  techStack: {
    title: "Stack",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      devops: "DevOps",
    },
  },
  howIWork: {
    title: "How I Work",
    steps: [
      { title: "Understand", description: "Understanding the problem and the business rules." },
      { title: "Design", description: "Defining the technical approach." },
      { title: "Build", description: "Developing the solution." },
      { title: "Validate", description: "Testing and staging." },
      { title: "Deploy", description: "Shipping and monitoring." },
    ],
  },
  contact: {
    title: "Let's build something together.",
    subtitle: "Open to new opportunities in Brazil and abroad.",
    cta: "Message on WhatsApp",
  },
  footer: {
    builtWith: "Built with React & Tailwind CSS.",
  },
};
