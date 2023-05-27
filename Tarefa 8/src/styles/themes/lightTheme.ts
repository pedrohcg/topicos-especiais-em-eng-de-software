// theme.ts
import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  borderRadius: {
    s: "2px",
    m: "4px",
    l: "8px",
    xl: "16px",
  },
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
      blue: "#1677ff",
      gray: "#909090",
      red: "#C73E1D",
    },
    primary: {
      main: "#FFFFFF",
      hoverColor: "#005D97",
      contrastText: "#3e3a46",
    },
    secondary: {
      main: "#f3f5f7",
      hoverColor: "#DDDDDD",
      contrastText: "#a3a1ab",
    },
    accentColor: "#0d5235",
  },
  lettering: {
    primary: "#000000",
    secondary: "#703edb",
    primaryOposite: "#ffffff",
    informations: "#7F8F9F",
  },
  spacing: {
    xxs: "2px",
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "32px",
    xxl: "40px",
    xxxl: "48px",
  },
  fontSize: {
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "16px",
    l: "24px",
    xl: "32px",
    xxl: "40px",
    xxxl: "48px",
  },
};

export default lightTheme;
