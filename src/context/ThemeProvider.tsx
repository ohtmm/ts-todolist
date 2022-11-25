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
    if (isDarkMode) {
    }
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      <StyledProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
