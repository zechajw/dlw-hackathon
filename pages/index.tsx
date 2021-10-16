import type { NextPage } from "next";
import Loading from "../components/Loading";
import Body from "../components/Body";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <Loading />
      <Body>
        <LandingPage />
      </Body>
    </>
  );
};

export default Home;
