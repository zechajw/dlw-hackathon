import type { NextPage } from "next";
import MyHead from "../components/MyHead";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <MyHead />
      <Navbar />
    </div>
  );
};

export default Home;
