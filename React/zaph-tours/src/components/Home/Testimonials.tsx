import { Box, Typography } from "@mui/material";
import CardSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <Box py={4}>
      <Typography
        variant="h4"
        textAlign="center"
        color="secondary.dark"
        sx={{ mb: 3 }}
      >
        Testimonials
      </Typography>
      <CardSlider />
    </Box>
  );
};
export default Testimonials;
