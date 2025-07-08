import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2C3E50", 
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E67E22", 
    },
    background: {
      default: "#F8F9FA", 
      paper: "#ffffff",
    },
    text: {
      primary: "#2C3E50", 
      secondary: "#7F8C8D",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: "2.2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 10,
  },
 
});

export default theme;
