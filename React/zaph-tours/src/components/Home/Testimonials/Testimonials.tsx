import { Box } from "@mui/material";
import CardSlider from "./TestimonialSlider";
import Title from "../../Title";
const Testimonials = () => {
  return (
    <Box py={4} sx={{ backgroundColor: "#fff" }}>
      <Title title="Testimonials" />
      <CardSlider />
    </Box>
  );
};
export default Testimonials;
