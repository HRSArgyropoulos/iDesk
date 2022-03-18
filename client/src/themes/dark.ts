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
    primary: '#fff',
  },
  background: {
    main: '#000',
    transparent: 'rgba(20,20,20,0.7)',
    card: '#212121',
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
