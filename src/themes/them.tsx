import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(216,48,51)",
      400: "rgb(220,72,87)",
      300: "rgb(226,113,128)",
      200: "rgb(234,158,170)",
      100: "rgb(244,207,212)",
    },
    secondary: {
      main: "rgb(0,0,0)",
      400: "rgb(51,51,51)",
      300: "rgb(102,102,102)",
      200: "rgb(153,153,153)",
      100: "rgb(204,204,204)",
    },
  },
  typography: {
    fontFamily: `"Poppins",sans-serif`,
    fontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 415,
      md: 824,
      lg: 1280,
      xl: 1536,
    },
  },
});
