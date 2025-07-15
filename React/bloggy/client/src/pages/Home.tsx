import HeroSection from "../components/HeroSection"
import FeaturedBlogs from "../components/FeaturedBlogs";
import {Box} from "@mui/material";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <FeaturedBlogs />
    </Box>
  );
};

export default Home;
