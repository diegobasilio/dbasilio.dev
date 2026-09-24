export type Dictionary = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    stack: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph: string;
  };
  experience: {
    title: string;
    current: string;
    focusTitle: string;
    focusAreas: string[];
  };
  projects: {
    title: string;
    descriptions: Record<string, string>;
    viewCode: string;
    liveDemo: string;
    privateProject: string;
  };
  techStack: {
    title: string;
    categories: Record<"backend" | "frontend" | "database" | "devops", string>;
  };
  howIWork: {
    title: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    builtWith: string;
  };
};
