import type { Dictionary } from "./types";

export const pt: Dictionary = {
  nav: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    stack: "Stack",
    contact: "Contato",
  },
  hero: {
    role: "Software Engineer — Full Stack Developer",
    tagline: "Construindo software que resolve problemas reais.",
    description:
      "Desenvolvedor Full Stack focado em construir aplicações web e sistemas financeiros em produção.",
    cta: "Vamos conversar",
  },
  about: {
    title: "Sobre",
    paragraph:
      "Sou Desenvolvedor Full Stack com mais de 3 anos de experiência construindo aplicações web e sistemas financeiros. Meu trabalho abrange backend e frontend — de APIs REST a interfaces modernas — incluindo a modernização de sistemas legados.",
  },
  experience: {
    title: "Experiência",
    current: "Atual",
    focusTitle: "Áreas de atuação",
    focusAreas: [
      "Levantamento de requisitos e regras de negócio",
      "Definição da abordagem técnica",
      "Desenvolvimento full-stack — APIs, frontend e backend",
      "Testes, homologação e deploy",
      "Investigação de problemas em produção e análise de causa raiz",
      "Apoio a desenvolvedores juniores",
      "Modernização de sistemas legados",
    ],
  },
  projects: {
    title: "Projetos Selecionados",
    descriptions: {
      "CEI Clarêncio":
        "Sistema interno de gestão para uma clínica de fitoterapia, com API REST em ASP.NET Core e frontend em React.",
    },
    viewCode: "Código",
    liveDemo: "Demo",
    privateProject: "Projeto privado",
  },
  techStack: {
    title: "Stack",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Banco de Dados",
      devops: "DevOps",
    },
  },
  howIWork: {
    title: "Como Trabalho",
    steps: [
      { title: "Understand", description: "Entender o problema e as regras de negócio." },
      { title: "Design", description: "Definir a abordagem técnica." },
      { title: "Build", description: "Desenvolver a solução." },
      { title: "Validate", description: "Testar e homologar." },
      { title: "Deploy", description: "Publicar e acompanhar." },
    ],
  },
  contact: {
    title: "Vamos construir algo juntos.",
    subtitle: "Aberto a novas oportunidades no Brasil e no exterior.",
    cta: "Chamar no WhatsApp",
  },
  footer: {
    builtWith: "Feito com React & Tailwind CSS.",
  },
};
