import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors hover:bg-primary/10 dark:hover:bg-primary-light/10"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-primary-light" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;