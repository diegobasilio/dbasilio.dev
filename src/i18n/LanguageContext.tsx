import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { en } from "./en";
import { pt } from "./pt";
import type { Dictionary } from "./types";

export type Language = "en" | "pt";

const STORAGE_KEY = "dbasilio-language";

const dictionaries: Record<Language, Dictionary> = { en, pt };

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt") return stored;

  const browserLanguage = window.navigator.language ?? "en";
  return browserLanguage.toLowerCase().startsWith("pt") ? "pt" : "en";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode, etc.) — language still works for this session.
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
