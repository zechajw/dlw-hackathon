import { FC, useState, useEffect } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

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
          <motion.h1
            className="font-black text-white select-none text-[12rem] text-gradient"
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            ÀI
          </motion.h1>
          <h1 className="-mt-10 font-light text-white select-none text-[16rem]">
            |
          </h1>

          <motion.p
            className="text-2xl font-bold text-white select-none"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Who says true love is hard to find?
            <br /> Not with us by your side
          </motion.p>
        </div>

        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <Button
            className={`px-12 py-4 text-2xl font-bold uppercase ${
              offset > 350 ? "opacity-20" : ""
            } transition-all duration-300`}
            href="analyzer"
          >
            Try it now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
export default LandingPage;
