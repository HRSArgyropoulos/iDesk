interface ITheme {
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
  borderRadius: string;
  fontFamily: {
    heading: string;
    subtitles: string;
    body: string;
    fallback: string;
  };
}

export default ITheme;
