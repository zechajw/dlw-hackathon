import type { NextPage } from "next";
import Loading from "../components/Loading";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";
import Border from "../components/Border";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";

const Home: NextPage = () => {
  return (
    <>
      <Loading />
      <Body>
        <Navbar />
        <LandingPage />
        <Border>
          <AboutUs />
        </Border>
        <Border>
          <ContactUs />
        </Border>
      </Body>
    </>
  );
};

export default Home;
