import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Share Your <span style={{ color: "#1976d2" }}>Stories</span> with
            the World
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ mt: 2 }}
          >
            Bloggy helps you write, manage, and share your thoughts. Join a
            creative community and start publishing your own blogs today.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
