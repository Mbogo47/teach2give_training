import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Login = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        minHeight: "80vh",
        width: "90%",
        maxWidth: 1000,
        margin: "auto",
        borderRadius: 0.8,
        overflow: "hidden",
      }}
    >
      {/* Left side - Image */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #FBC4AB",
          borderRadius: 0.8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/sign-in.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: 2,
          }}
        />
      </Box>

      {/* Right side - Form */}
      <Box
        sx={{
          flex: 1,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid #FBC4AB",
          borderRadius: 0.8,
        }}
      >
        {/* Logo */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Box
            component="img"
            src="/notely.svg"
            alt="Notely logo"
            sx={{ width: 40, height: 40 }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h6" gutterBottom align="center">
          Sign In to Notely
        </Typography>

        {/* Form */}
        <form>
          <TextField fullWidth label="Email or Username" margin="normal" />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type="password"
          />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Sign In
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Login;
