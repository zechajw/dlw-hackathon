import type { NextPage } from "next";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Body>
        <Navbar />
        <LandingPage />
      </Body>
    </>
  );
};

export default Home;
