import type { NextPage } from "next";
import Loading from "../components/Loading";
import MobileHide from "../components/MobileHide";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";
import Border from "../components/Border";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Guide from "../components/Guide";
import Analyzer from "../components/Analyzer";
import Technologies from "../components/Technologies";
import ContactUs from "../components/ContactUs";

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
            <Guide />
            <Analyzer />
            <Technologies />
            <ContactUs />
          </Border>
        </Body>
      </MobileHide>
    </>
  );
};

export default Home;
