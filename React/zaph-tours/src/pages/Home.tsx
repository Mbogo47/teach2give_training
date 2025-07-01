import Hero from "../components/Hero.tsx";
import About from "../components/About.tsx";
import FeaturedDestinations from "../components/FeaturedDestinations.tsx";
import Testimonials from "../components/Testimonials.tsx";
import NewsLetter from "../components/NewsLetter.tsx";

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
