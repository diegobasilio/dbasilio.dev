export type Dictionary = {
  nav: {
    about: string;
    journey: string;
    education: string;
    projects: string;
    stack: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
  };
  about: {
    title: string;
    paragraph: string;
  };
  journey: {
    title: string;
    entries: Record<string, { period: string; description: string }>;
  };
  education: {
    title: string;
    levels: Record<"higher" | "technical", string>;
    status: Record<string, string>;
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
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
};
