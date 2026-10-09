import React from 'react';
import { useTheme, BrandTheme } from '../context/ThemeContext';

const themes: { id: BrandTheme; label: string; desc: string }[] = [
  { id: 'minimalista', label: 'A', desc: 'Minimalista' },
  { id: 'clasico', label: 'B', desc: 'Clásico' },
  { id: 'presencia', label: 'C', desc: 'Presencia' },
];

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex items-center gap-1 p-1 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-[var(--border)]">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            theme === t.id
              ? 'bg-[var(--accent)] text-white shadow-md'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
          }`}
          title={t.desc}
        >
          <span className="sm:hidden">{t.label}</span>
          <span className="hidden sm:inline">{t.desc}</span>
        </button>
      ))}
    </div>
  );
};
