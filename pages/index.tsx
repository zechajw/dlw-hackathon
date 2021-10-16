import type { NextPage } from "next";
import Loading from "../components/Loading";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";
import Border from "../components/Border";
import AboutUs from "../components/AboutUs";

const Home: NextPage = () => {
  return (
    <>
      <Loading />
      <Body>
        <LandingPage />
        <Border>
          <AboutUs />
        </Border>
      </Body>
    </>
  );
};

export default Home;
