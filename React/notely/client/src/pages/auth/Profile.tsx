import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { useReducer, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { domain } from "../../components/utils/utils";
import {
  initialProfileState,
  profileReducer,
  initialPasswordState,
  passwordReducer,
} from "../../reducers/userProfileReducer";

const Profile = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${domain}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    initialProfileState,
  );

  const [passwordState, passwordDispatch] = useReducer(
    passwordReducer,
    initialPasswordState,
  );

  // Sync data when loaded
  if (user && !profileState.username && !isLoading && !isError) {
    profileDispatch({ type: "SET_INITIAL", payload: user });
  }

  const handleProfileUpdate = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("username", profileState.username);
    formData.append("firstName", profileState.firstName);
    formData.append("lastName", profileState.lastName);
    if (profileState.avatar) {
      formData.append("avatar", profileState.avatar);
    }

    try {
      await axios.put(`${domain}/user/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Profile updated");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };

  const handlePasswordUpdate = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `${domain}/user/password`,
        {
          currentPassword: passwordState.currentPassword,
          newPassword: passwordState.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Password updated");
      passwordDispatch({ type: "RESET" });
    } catch (error) {
      toast.error("Failed to update password");
      console.error(error);
    }
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError)
    return <Typography color="error">Failed to load profile</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Profile Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Profile Information
          </Typography>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar
              src={user.avatar}
              sx={{ width: 64, height: 64, cursor: "pointer" }}
              onClick={() => inputFileRef.current?.click()}
            />
            <input
              ref={inputFileRef}
              type="file"
              hidden
              onChange={(e) =>
                profileDispatch({
                  type: "SET_AVATAR",
                  payload: e.target.files?.[0] || null,
                })
              }
            />
          </Box>
          <TextField
            label="First Name"
            fullWidth
            value={profileState.firstName}
            onChange={(e) =>
              profileDispatch({
                type: "SET_FIRST_NAME",
                payload: e.target.value,
              })
            }
            margin="normal"
          />
          <TextField
            label="Last Name"
            fullWidth
            value={profileState.lastName}
            onChange={(e) =>
              profileDispatch({
                type: "SET_LAST_NAME",
                payload: e.target.value,
              })
            }
            margin="normal"
          />
          <TextField
            label="Username"
            fullWidth
            value={profileState.username}
            onChange={(e) =>
              profileDispatch({ type: "SET_USERNAME", payload: e.target.value })
            }
            margin="normal"
          />
          <TextField
            label="Email"
            fullWidth
            value={user.emailAddress}
            disabled
            margin="normal"
          />
          <Button
            variant="contained"
            onClick={handleProfileUpdate}
            sx={{ mt: 2 }}
          >
            Update Profile
          </Button>
        </Grid>

        {/* Password Update */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Update Password
          </Typography>
          <TextField
            label="Current Password"
            fullWidth
            type="password"
            value={passwordState.currentPassword}
            onChange={(e) =>
              passwordDispatch({
                type: "SET_CURRENT_PASSWORD",
                payload: e.target.value,
              })
            }
            margin="normal"
          />
          <TextField
            label="New Password"
            fullWidth
            type="password"
            value={passwordState.newPassword}
            onChange={(e) =>
              passwordDispatch({
                type: "SET_NEW_PASSWORD",
                payload: e.target.value,
              })
            }
            margin="normal"
          />
          <Button
            variant="contained"
            onClick={handlePasswordUpdate}
            sx={{ mt: 2 }}
          >
            Update Password
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
