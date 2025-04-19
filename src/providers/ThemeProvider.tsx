import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define los tipos para el contexto del tema
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  themes: string[];
  systemTheme?: string;
}

// Crea el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  themes: ["light", "dark"],
});

// Hook para usar el tema en cualquier componente
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  themes?: string[];
  storageKey?: string;
  attribute?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
  themes = ["light", "dark", "purple-dark", "crypto"],
  storageKey = "heroui-theme",
  attribute = "class",
}) => {
  // Estado para el tema actual
  const [theme, setThemeState] = useState<string>(() => {
    // Intenta obtener el tema guardado del localStorage
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;

    // Si hay un tema guardado, úsalo
    if (storedTheme && themes.includes(storedTheme)) {
      return storedTheme;
    }

    // Si el tema por defecto es 'system', detectar preferencia del sistema
    if (defaultTheme === "system") {
      const systemTheme =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      return systemTheme;
    }

    // Usar el tema por defecto
    return defaultTheme;
  });

  // Estado para el tema del sistema
  const [systemTheme, setSystemTheme] = useState<string>(() => {
    return typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Función para cambiar el tema
  const setTheme = (newTheme: string) => {
    if (newTheme === "system") {
      setThemeState(systemTheme);
    } else {
      setThemeState(newTheme);
    }

    // Guardar en localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, newTheme);
    }
  };

  // Efecto para aplicar el tema al atributo especificado (normalmente 'class' para Tailwind)
  useEffect(() => {
    const root = document.documentElement;

    // Primero, eliminar cualquier tema anterior
    themes.forEach((t) => {
      root.classList.remove(t);
    });

    // Luego, aplicar el tema actual
    root.classList.add(theme);
  }, [theme, themes]);

  // Efecto para detectar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const newSystemTheme = mediaQuery.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);

      // Si el tema actual es 'system', actualizar al nuevo tema del sistema
      const currentTheme = localStorage.getItem(storageKey);
      if (currentTheme === "system") {
        setThemeState(newSystemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
