import { FC, useState, useEffect } from "react";
import NavItem from "./NavItem";
import Button from "./Button";

const Navbar: FC = () => {
  const [blackBG, setBlackBG] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 50 pixels
    const toggleVisibility = (): void => {
      if (window.pageYOffset > window.innerHeight) {
        setBlackBG(true);
      } else {
        setBlackBG(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed flex flex-row items-center w-full h-auto px-8 py-6 ${
        blackBG ? "bg-svg" : "bg-transparent"
      }`}
    >
      <div>
        <a
          className="text-4xl font-black text-white cursor-pointer bg-ai hover:text-transparent bg-clip-text"
          href="#home"
        >
          ÀI
        </a>
      </div>
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <NavItem title={"Home"} href={"#home"} />
        <NavItem title={"About Us"} href={"#about-us"} />
        <NavItem title={"How"} href={"#how"} />
        <NavItem title={"Contact Us"} href={"#contact-us"} />
      </div>
      <div className="ml-auto">
        <Button className="px-6 py-2">Try it now</Button>
      </div>
    </div>
  );
};
export default Navbar;
