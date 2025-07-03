import Hero from "../components/Home/Hero.tsx";
import About from "../components/Home/About.tsx";
import FeaturedDestinations from "../components/Home/FeaturedDestinations.tsx";
import Testimonials from "../components/Home/Testimonials.tsx";
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
