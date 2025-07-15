import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { domain } from "../utils/utils";

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${domain}/user/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = res.data;
        setUser(data);
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setEmailAddress(data.emailAddress || "");
        setAvatarUrl(data.profileImage || "");
      } catch (err) {
        toast.error("Failed to fetch profile.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("emailAddress", emailAddress);
    if (avatar) formData.append("avatar", avatar);

    setSaving(true);
    try {
      const res = await axios.put(`${domain}/user/profile`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Profile updated!");
      setAvatarUrl(res.data.profileImage || avatarUrl);
    } catch (err) {
      toast.error("Failed to update profile.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>
          Edit Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                src={avatar ? URL.createObjectURL(avatar) : avatarUrl}
                sx={{ width: 80, height: 80 }}
              />
              <Button component="label" variant="outlined">
                Upload Avatar
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setAvatar(e.target.files?.[0] || null)}
                />
              </Button>
            </Box>

            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              required
            />
            <TextField label="Email" value={emailAddress} fullWidth disabled />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfile;
