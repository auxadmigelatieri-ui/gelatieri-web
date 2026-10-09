import React, { createContext, useContext, useState, useEffect } from 'react';

export type BrandTheme = 'minimalista' | 'clasico' | 'presencia';

interface ThemeContextType {
  theme: BrandTheme;
  setTheme: (theme: BrandTheme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'minimalista',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<BrandTheme>(() => {
    try {
      const saved = localStorage.getItem('gelatieri-brand-theme');
      if (saved === 'minimalista' || saved === 'clasico' || saved === 'presencia') return saved;
    } catch {}
    return 'minimalista';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', theme);
    try { localStorage.setItem('gelatieri-brand-theme', theme); } catch {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
