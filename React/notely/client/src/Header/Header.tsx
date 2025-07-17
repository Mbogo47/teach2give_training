import {
  AppBar,
  Container,
  Link as MuiLink,
  Toolbar,
  Box,
  Button,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left: Logo + Title */}
          <Box display="flex" alignItems="center">
            <img
              src="/notely.svg" // Ensure it's in your `public/` folder
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
          <Box>
            <Button color="secondary" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="secondary" component={RouterLink} to="/signup">
              Sign Up
            </Button>
            <Button color="secondary" component={RouterLink} to="/signin">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
