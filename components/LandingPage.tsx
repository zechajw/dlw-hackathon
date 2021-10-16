import { FC } from "react";
import Button from "./Button";

const LandingPage: FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-landing">
        <div className="flex items-center">
          <h1 className="font-black text-white text-[12rem]">ÀI</h1>
          <h1 className="-mt-10 font-light text-white text-[16rem]">|</h1>

          <p className="text-2xl font-bold text-white">
            Who says true love is hard to find?
            <br /> Not with us by your side
          </p>
        </div>
        <Button className="px-12 py-4 text-2xl font-bold uppercase">
          Try it now
        </Button>
      </div>
    </div>
  );
};
export default LandingPage;
