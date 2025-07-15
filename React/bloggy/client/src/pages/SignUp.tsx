import React, { useState } from "react";
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
import { toast } from "react-toastify";
import axios from "axios";
import { domain } from "../utils/utils";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { firstName, lastName, username, emailAddress, password } = form;
    console.log({ firstName, lastName, username, emailAddress, password });
    setLoading(true);

    try {
      const res = await axios.post(`${domain}/auth/register`, {
        firstName,
        lastName,
        username,
        emailAddress,
        password,
      });
      toast.success("User created successful");
      navigate("/signin");
      console.log(res)
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
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "100%" }}
        >
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            required
            margin="normal"
            value={form.firstName}
            onChange={handleChange}
            disabled={loading}
          />
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            required
            margin="normal"
            value={form.lastName}
            onChange={handleChange}
            disabled={loading}
          />
          <TextField
            name="username"
            label="Username"
            fullWidth
            required
            margin="normal"
            value={form.username}
            onChange={handleChange}
          />
          <TextField
            name="emailAddress"
            label="Email Address"
            type="email"
            fullWidth
            required
            margin="normal"
            value={form.emailAddress}
            onChange={handleChange}
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
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={form.confirmPassword}
            onChange={handleChange}
            disabled={loading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign Up"
            )}
          </Button>
          <Link
            component={RouterLink}
            to="/signin"
            variant="body2"
            display="block"
            align="right"
          >
            Already have an account? Sign in
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
