import { Box} from "@mui/material";
import CardSlider from "./DestinationSlider";
import Title from "../Title";

const FeaturedDestinations = () => {
  return (
    <Box py={4}>
      <Title title="Featured Destinations" />
      <CardSlider />
    </Box>
  );
};

export default FeaturedDestinations;
