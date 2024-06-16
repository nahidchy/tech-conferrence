
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutConference from "./AboutConference";
import AllEvents from "./AllEvents";
import GetStarted from "./GetStarted";
import Header from "./Header/Header";
import OurSpeakers from "./OurSpeakers";
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <Header data-aos="fade-down" />
      <AllEvents data-aos="fade-up" />
      <AboutConference data-aos="fade-right" />
      <OurSpeakers data-aos="fade-left" />
      <GetStarted data-aos="zoom-in" />
    </div>
  );
};

export default Home;
