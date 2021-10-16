import { FC, useState, useEffect } from "react";
import Button from "./Button";

const LandingPage: FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Button is displayed after scrolling for 50 pixels
    const toggleVisibility = (): void => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col items-center justify-center w-full h-screen bg-landing">
        <div
          className={`flex items-center ${
            offset > 100 ? "opacity-20" : ""
          } transition-all duration-300`}
        >
          <h1 className="font-black text-white select-none text-[12rem] text-gradient">
            ÀI
          </h1>
          <h1 className="-mt-10 font-light text-white select-none text-[16rem]">
            |
          </h1>

          <p className="text-2xl font-bold text-white select-none">
            Who says true love is hard to find?
            <br /> Not with us by your side
          </p>
        </div>
        <Button
          className={`px-12 py-4 text-2xl font-bold uppercase ${
            offset > 350 ? "opacity-20" : ""
          } transition-all duration-300`}
        >
          Try it now
        </Button>
      </div>
    </div>
  );
};
export default LandingPage;
