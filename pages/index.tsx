import type { NextPage } from "next";
import Loading from "../components/Loading";
import MobileHide from "../components/MobileHide";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";
import Border from "../components/Border";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Analyzer from "../components/Analyzer";

const Home: NextPage = () => {
  return (
    <>
      <Loading />
      <MobileHide>
        <Body>
          <Navbar />
          <LandingPage />
          <Border>
            <AboutUs />
            <Analyzer />


          <ContactUs />
          </Border>
        </Body>
      </MobileHide>
          </>
  );
};

export default Home;
