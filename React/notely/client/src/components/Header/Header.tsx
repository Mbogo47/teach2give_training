import {
  AppBar,
  Container,
  Link as MuiLink,
  Toolbar,
  Box,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(logout());
    navigate("/");
    handleClose();
  };

  return (
    <AppBar position="static">
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
            <Box>
              <Button color="secondary" component={RouterLink} to="/notes">
                Notes
              </Button>
              <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
                <Avatar
                  src={user?.avatarImage || undefined}
                  sx={{
                    color: !user?.avatarImage ? "secondary.main" : undefined,
                    border: !user?.avatarImage ? "2px solid" : undefined,
                    borderColor: !user?.avatarImage
                      ? "primary.main"
                      : undefined,
                    bgcolor: !user?.avatarImage
                      ? "background.paper"
                      : undefined,
                  }}
                >
                  {!user?.avatarImage &&
                    `${user?.firstName?.[0] ?? ""}${
                      user?.lastName?.[0] ?? ""
                    }`.toUpperCase()}
                </Avatar>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
