import { Box, Typography, Container } from "@mui/material";
import CardSlider from "./CardSlider"

const FeaturedDestinations = () => {
  return (
    <Box py={4} sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          color="secondary.dark"
          sx={{ mb: 4 }}
        >
          Featured Destinations
        </Typography>
        <CardSlider />
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
