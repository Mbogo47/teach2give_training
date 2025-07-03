import Hero from "../components/Home/Hero.tsx";
import About from "../components/Home/About.tsx";
import FeaturedDestinations from "../components/Home/FeaturedDestinations/FeaturedDestinations.tsx";
import Testimonials from "../components/Home/Testimonials/Testimonials.tsx";
import NewsLetter from "../components/Home/NewsLetter.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedDestinations />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default Home;
