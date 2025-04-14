import React, { createContext, useContext, useEffect, useState } from "react";

const DARK = "dark";
const LIGHT = "light";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DARK);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(DARK, savedTheme === DARK);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(DARK);
      document.documentElement.classList.add(DARK);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(DARK);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
