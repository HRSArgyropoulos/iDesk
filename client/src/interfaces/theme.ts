import { ThemeType } from '../types/theme';
export interface ITheme {
  primary: {
    main: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    contrastText: string;
  };
  error: {
    main: string;
  };
  warning: {
    main: string;
  };
  success: {
    main: string;
  };
  info: {
    main: string;
  };
  text: {
    primary: string;
  };
  background: {
    main: string;
    transparent: string;
    card: string;
  };
  borderRadius: string;
  fontFamily: {
    heading: string;
    subtitles: string;
    body: string;
    fallback: string;
  };
}

export interface IThemeContext {
  toggleTheme: (theme: ThemeType) => void;
}

export interface IThemeProvider {
  children: React.ReactNode;
}
