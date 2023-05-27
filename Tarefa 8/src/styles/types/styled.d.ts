import "styled-components";

interface IPalette {
  main: string;
  hoverColor: string;
  contrastText: string;
}

interface ISizes {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
        blue: string;
        gray: string;
        red: string;
      };
      primary: IPalette;
      secondary: IPalette;
      accentColor: string;
    };
    lettering: {
      primary: string;
      secondary: string;
      primaryOposite: string;
      informations: string;
    };
    spacing: ISizes;
    fontSize: ISizes;
  }
}
