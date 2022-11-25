import { createContext, ReactNode, useState, useEffect } from 'react';
import { LightTheme, DarkTheme } from '../styles/theme';
import { ThemeProps, ThemeProvider as StyledProvider } from 'styled-components';

interface IThemeProvider {
  children: React.ReactNode;
}

interface ContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {
    return null;
  },
});

function ThemeProvider({ children }: IThemeProvider) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (!isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      <StyledProvider
        theme={localStorage.getItem('theme') ? DarkTheme : LightTheme}
      >
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
