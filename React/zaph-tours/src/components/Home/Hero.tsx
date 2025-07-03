import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        mb: 3,
      }}
      
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <Container
        sx={{
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Zaph Tours
        </Typography>
        <Typography variant="h5" component="p" mb={4}>
          Discover amazing destinations and make unforgettable memories with us.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
