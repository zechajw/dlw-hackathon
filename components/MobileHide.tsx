import { FC } from "react";

const MobileHide: FC = ({ children }) => {
  return (
    <>
      <div className="hidden sm:block">{children}</div>
      <div className="flex flex-col items-center justify-center h-screen px-8 sm:hidden bg-svg">
        <h1 className="text-4xl font-bold text-white">
          Welcome to <span className="font-black">ÀI</span>
        </h1>
        <p className="mt-12 text-xl text-justify text-white">
          It seems that you are visiting our website from a mobile device.
          Unfortunately, our platform currently does not support usage from a
          mobile device. Do check back here on a laptop or PC.
        </p>
        <h2 className="mt-12 text-2xl font-bold text-white">Thank you!</h2>
      </div>
    </>
  );
};
export default MobileHide;
