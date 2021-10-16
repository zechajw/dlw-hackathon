import type { NextPage } from "next";
import Loading from "../components/Loading";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Loading />
      <Body>
        <Navbar />
        <LandingPage />
      </Body>
    </>
  );
};

export default Home;
