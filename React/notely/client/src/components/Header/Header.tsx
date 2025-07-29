import {
  AppBar,
  Container,
  Link as MuiLink,
  Toolbar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";

const friendlyMessages = [
  "Hope you're having a fantastic day!",
  "Glad to see you back!",
  "Let’s make today productive!",
  "You’ve got this 💪",
  "Let’s crush some goals today!",
  "Feeling awesome? You should! 😄",
  "Keep up the great work!",
  "Your energy is contagious! ⚡️",
  "Let's do something amazing today ✨",
  "Take a deep breath and own the day 🌟",
  "Great things are coming your way!",
  "Remember to take breaks and stay hydrated 💧",
  "You're doing better than you think!",
  "Every small step counts 🚀",
  "You're unstoppable today 🔥",
  "Welcome back, superstar 🌠",
  "Ready to make an impact?",
  "It's your time to shine 🌞",
  "One step closer to your goals!",
  "Grateful to have you here 🙌",
];

const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user && !welcomeMessage) {
      const random =
        friendlyMessages[Math.floor(Math.random() * friendlyMessages.length)];
      setWelcomeMessage(random);
    }
  }, [user, welcomeMessage]);

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <img
              src="/notely.svg"
              alt="Notely Logo"
              style={{ width: 28, height: 28, marginRight: 8 }}
            />
            <MuiLink
              component={RouterLink}
              to="/"
              color="secondary"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              Notely
            </MuiLink>
          </Box>

          {/* Right: Nav buttons */}
          {user ? (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {welcomeMessage && (
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 1, color: "#E4C1F9" }}
                >
                  {welcomeMessage}
                </Typography>
              )}
            </Box>
          ) : (
            <Box>
              <Button color="secondary" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="secondary" component={RouterLink} to="/signin">
                Sign In
              </Button>
              <Button
                color="secondary"
                component={RouterLink}
                to="/signup"
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
