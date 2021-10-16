import { FC } from "react";
import Profile from "./Profile";

const ContactUs: FC = () => {
  return (
    <>
      <div id="contact-us" className="h-screen">
        <h1 className="px-8 text-4xl font-bold text-white pt-36">Contact Us</h1>
        <div className="mb-auto grid grid-cols-4">
          <Profile
            src={"/images/amos.jpeg"}
            name={"Amos Liew"}
            link="https://www.linkedin.com/in/amosliew13/"
          />
          <Profile
            src={"/images/jess.png"}
            name={"Jess"}
            link="https://www.linkedin.com/in/jess-raphael-ong-954091205/"
          />
          <Profile
            src={"/images/zech.png"}
            name={"Zechary Au"}
            link="https://www.linkedin.com/in/zechary-au-b92a34217/"
          />
          <Profile
            src={"/images/rayner.png"}
            name={"Rayner Loh"}
            link="https://www.linkedin.com/in/raypuff/"
          />
        </div>
      </div>
    </>
  );
};
export default ContactUs;
