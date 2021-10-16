import type { NextPage } from "next";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <Body>
        <LandingPage />
      </Body>
    </>
  );
};

export default Home;
