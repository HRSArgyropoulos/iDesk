import ITheme from '../interfaces/theme';

const lightTheme: ITheme = {
  primary: {
    main: '#9ACBFF',
    contrastText: '#000',
  },
  secondary: {
    main: '#7dbef6',
    contrastText: '#000',
  },
  error: {
    main: '#d32f2f',
  },
  warning: {
    main: '#ff9800',
  },
  success: {
    main: '#2e7d32',
  },
  info: {
    main: '#ffffff',
  },
  text: {
    primary: '#000',
  },
  background: {
    main: '#fff',
    transparent: 'rgba(230,230,230,0.35)',
    card: '#e0e0e0',
  },
  borderRadius: '9px',
  fontFamily: {
    heading: 'Inter',
    subtitles: 'Inter',
    body: 'Montserrat',
    fallback: 'sans-serif',
  },
};

export default lightTheme;
