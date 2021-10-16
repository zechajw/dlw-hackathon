import { FC } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Logo from "../public/icons/white-nobg.png";

const Navbar: FC = () => {
  return (
    <div className="flex flex-row items-center h-auto">
      <div>
        <Image
          className="object-contain"
          src={Logo}
          width={200}
          height={100}
          alt="logo"
        />
      </div>
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <NavItem title={"Home"} link={"/"} />
        <NavItem title={"About Us"} link={"/about-us"} />
        <NavItem title={"How We Did It"} link={"how"} />
        <NavItem title={"Contact Us"} link={"contact-us"} />
        <div />
      </div>
    </div>
  );
};
export default Navbar;
