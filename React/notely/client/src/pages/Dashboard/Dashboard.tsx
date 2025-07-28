import {
  Box,
  Drawer,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import {
  NoteAdd,
  Notes,
  AssignmentInd,
  DeleteOutlineRounded,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useState } from "react";
import { RootState } from "../../store/store";

const drawerWidth = 80;

const DashboardLayout: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => setLogoutDialogOpen(true);
  const handleLogoutConfirm = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
    setLogoutDialogOpen(false);
  };
  const handleLogoutCancel = () => setLogoutDialogOpen(false);

  const navItems = [
    { to: "/dashboard/notes", icon: <Notes />, label: "All Notes" },
    { to: "/dashboard/create", icon: <NoteAdd />, label: "Create Note" },
    { to: "/dashboard/my-notes", icon: <AssignmentInd />, label: "My Notes" },
    {
      to: "/dashboard/trash",
      icon: <DeleteOutlineRounded />,
      label: "My Notes",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            alignItems: "center",
            paddingTop: 2,
            mt: 8,
          },
        }}
      >
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          {navItems.map((item) => (
            <Tooltip title={item.label} placement="right" arrow key={item.to}>
              <IconButton
                component={NavLink}
                to={item.to}
                sx={{
                  color: "inherit",
                  "&.active": {
                    color: "primary.main",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}

          {/* Avatar -> navigates to /profile */}
          <Tooltip title="Profile" placement="right" arrow>
            <IconButton onClick={() => navigate("/profile")}>
              <Avatar
                src={user?.avatarImage || undefined}
                sx={{
                  color: !user?.avatarImage ? "secondary.main" : undefined,
                  border: !user?.avatarImage ? "2px solid" : undefined,
                  borderColor: !user?.avatarImage ? "primary.main" : undefined,
                  bgcolor: !user?.avatarImage ? "background.paper" : undefined,
                }}
              >
                {!user?.avatarImage &&
                  `${user?.firstName?.[0] ?? ""}${
                    user?.lastName?.[0] ?? ""
                  }`.toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>

          {/* Logout Icon */}
          <Tooltip title="Logout" placement="right" arrow>
            <IconButton onClick={handleLogoutClick}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={logoutDialogOpen}
        onClose={handleLogoutCancel}
        slotProps={{
          paper: {
            sx: {
              backdropFilter: "blur(8px)",
              backgroundColor: "#1A1B26",
              color: "#fff",
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          Confirm Logout
        </DialogTitle>
        <Divider sx={{ width: "100%", my: 1 }} />
        <DialogContent sx={{ textAlign: "center", fontSize: "1.2rem" }}>
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: "space-between", pb: 4, m: [0, 2] }}
        >
          <Button onClick={handleLogoutCancel} variant="contained">
            Cancel
          </Button>
          <Button
            color="error"
            onClick={handleLogoutConfirm}
            variant="contained"
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashboardLayout;
