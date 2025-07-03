import { Box, Typography } from "@mui/material";
import CardSlider from "./DestinationSlider";

const FeaturedDestinations = () => {
  return (
    <Box py={4} sx={{ backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        textAlign="center"
        color="secondary.dark"
        sx={{ mb: 3 }}
      >
        Featured Destinations
      </Typography>
      <CardSlider />
    </Box>
  );
};

export default FeaturedDestinations;
