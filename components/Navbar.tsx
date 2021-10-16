import { FC } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Logo from "../public/icons/white-nobg.png";
import Button from "./Button";

const Navbar: FC = () => {
  return (
    <div className="fixed flex flex-row items-center w-full h-auto py-6 pr-8 bg-transparent">
      <div>
        <h1 className="pl-10 text-white bg-red-500 text-7xl hover:text-transparent bg-clip-text">
          ÀI
        </h1>
      </div>
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <NavItem title={"Home"} link={"/"} />
        <NavItem title={"About Us"} link={"/about-us"} />
        <NavItem title={"How"} link={"how"} />
        <NavItem title={"Contact Us"} link={"contact-us"} />
      </div>
      <div className="ml-auto">
        <Button className="px-6 py-2">Try it now</Button>
      </div>
    </div>
  );
};
export default Navbar;
