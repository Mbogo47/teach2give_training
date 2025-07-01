import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme/theme";
import Header from "./components/Header.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Destinations from "./pages/Destinations.tsx";
import Trips from "./pages/Trips.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
