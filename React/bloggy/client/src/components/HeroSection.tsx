import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#f0f4ff", 
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Discover <span style={{ color: "#1976d2" }}>Voices</span> That Matter
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Explore insightful articles, unique perspectives, and passionate writers
          from around the world. Bloggy is your window into stories that inspire and inform.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
          onClick={() => navigate("/blogs")}
        >
          Explore Blogs
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
