import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5c5552",
    },
    secondary: {
      main: "#d2f898",
    },
    background: {
      default: "#f7f0f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#433633",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          color: "#433633",
        },
      },
    },
  },
});

export default theme;
