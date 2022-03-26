import { createContext, useState } from 'react';
import { light, dark } from '../themes';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import GlobalStyles from '../themes/globalStyles';
import {
  ITheme,
  IThemeContext,
  IThemeProvider,
} from '../interfaces/theme';
import { ThemeType } from '../types/theme';

const ThemeContext = createContext<IThemeContext>({
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [activeTheme, setActiveTheme] = useState<ITheme>(light);

  const toggleTheme = (theme: ThemeType) => {
    let activeTheme;
    switch (theme) {
      case 'light':
        activeTheme = light;
        break;
      case 'dark':
        activeTheme = dark;
        break;
      default:
        activeTheme = light;
    }
    setActiveTheme(activeTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProviderStyled theme={activeTheme}>
        <GlobalStyles />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
