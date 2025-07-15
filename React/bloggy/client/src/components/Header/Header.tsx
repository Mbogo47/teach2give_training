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
  MuiLink 
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
          component={Link}
          to="/"
          color="inherit"
          sx={{ cursor: 'pointer', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}
         >
  BlogIt
</MuiLink>


          {user ? (
            <>
              <Button color="inherit" component={Link} to="/blogs">
                Blogs
              </Button>
              <Button color="inherit" component={Link} to="/create-blogs">
                Create Blog
              </Button>
              <Button color="inherit" component={Link} to="/my-blogs">
                My Blogs
              </Button>

              <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
                {/* <Avatar src={getAvatarSrc()} alt={user.username} /> */}
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
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signin">
                Sign In
              </Button>
              <Button color="inherit" component={Link} to="/signup">
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
