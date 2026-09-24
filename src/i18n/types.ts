export type Dictionary = {
  nav: {
    about: string;
    journey: string;
    projects: string;
    stack: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph: string;
  };
  journey: {
    title: string;
    current: string;
    descriptions: Record<string, string>;
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
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
};
