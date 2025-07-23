import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/notfound/NotFound";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
import Notes from "./pages/notes/Notes";

function App() {
  return (
    <>
      <Header />

      <Box sx={{ pt: { xs: 4, sm: 6, md: 8 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Box>

      <ToastContainer
        toastStyle={{ backgroundColor: "#2A2B3C", color: "#E4C1F9" }}
      />
    </>
  );
}

export default App;
