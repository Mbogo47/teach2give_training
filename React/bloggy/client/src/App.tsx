import './App.css'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      bloggy
  </ThemeProvider>
  )
}

export default App
