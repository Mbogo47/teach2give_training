import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const { firstName, lastName, username, emailAddress, password } = form;
    console.log({ firstName, lastName, username, emailAddress, password });
    // Send to backend
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
          <TextField name="firstName" label="First Name" fullWidth required margin="normal" value={form.firstName} onChange={handleChange} />
          <TextField name="lastName" label="Last Name" fullWidth required margin="normal" value={form.lastName} onChange={handleChange} />
          <TextField name="username" label="Username" fullWidth required margin="normal" value={form.username} onChange={handleChange} />
          <TextField name="emailAddress" label="Email Address" type="email" fullWidth required margin="normal" value={form.emailAddress} onChange={handleChange} />
          <TextField name="password" label="Password" type="password" fullWidth required margin="normal" value={form.password} onChange={handleChange} />
          <TextField name="confirmPassword" label="Confirm Password" type="password" fullWidth required margin="normal" value={form.confirmPassword} onChange={handleChange} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Link component={RouterLink} to="/" variant="body2" display="block" align="right">
            Already have an account? Sign in
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
