import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Link,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { domain } from "../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { identifier, password } = form;

    if (!form.identifier || !form.password) {
      toast.error("Please enter both username/email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${domain}/auth/login`, {
        identifier,
        password,
      });
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
      navigate("/blogs");
    } catch (err: any) {
      const message =
        err.response?.data?.error || err.message || "Login failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "100%" }}
        >
          <TextField
            name="identifier"
            label="Username or Email"
            fullWidth
            required
            margin="normal"
            value={form.identifier}
            onChange={handleChange}
            disabled={loading}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={form.password}
            onChange={handleChange}
            disabled={loading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
          <Link
            component={RouterLink}
            to="/signup"
            variant="body2"
            display="block"
            align="right"
          >
            Don’t have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
