import ITheme from '../interfaces/theme';

const darkTheme: ITheme = {
  primary: {
    main: '#000000',
    contrastText: '#fff',
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
  borderRadius: '9px',
  fontFamily: {
    heading: 'Inter',
    subtitles: 'Inter',
    body: 'Montserrat',
    fallback: 'sans-serif',
  },
};

export default darkTheme;
