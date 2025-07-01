import { Box, Typography, Button, Container } from "@mui/material";
const Home = () => {
  return (
    <>
      {" "}
      <Box
        sx={{
          //   backgroundColor: "primary.main",
          color: "black",
          py: 10,
          display: "flex",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Zaph Tours
          </Typography>
          <Typography variant="h5" component="p" mb={4}>
            Discover amazing destinations and make unforgettable memories with
            us.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
        </Container>
      </Box>
      <Box></Box>
    </>
  );
};

export default Home;
