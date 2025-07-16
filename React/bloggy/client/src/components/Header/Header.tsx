import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    handleClose();
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <MuiLink
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.25rem",
              mr: 2,
            }}
          >
            BlogIt
          </MuiLink>

          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/blogs">
                Blogs
              </Button>
              <Button color="inherit" component={RouterLink} to="/create-blogs">
                Create Blog
              </Button>
              <Button color="inherit" component={RouterLink} to="/my-blogs">
                My Blogs
              </Button>

              <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
                <Avatar src={user?.profileImage || "/default-avatar.png"} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ ml: "auto" }}>
              <Button color="inherit" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/signin">
                Sign In
              </Button>
              <Button color="inherit" component={RouterLink} to="/signup">
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );


export default Header;
