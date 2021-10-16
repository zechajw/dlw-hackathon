import { FC } from "react";
import Profile from "./Profile";
import { Fade } from "react-awesome-reveal";

const ContactUs: FC = () => {
  return (
    <>
      <div id="contact-us" className="pt-32">
        <h1 className="heading">Contact Us</h1>
        <div className="my-12 grid grid-cols-4">
          <Fade direction="left">
            <Profile
              src={"/images/amos.jpeg"}
              name={"Amos Liew"}
              link="https://www.linkedin.com/in/amosliew13/"
            />
          </Fade>
          <Fade direction="left" delay={200}>
            <Profile
              src={"/images/jess.png"}
              name={"Jess Ong"}
              link="https://www.linkedin.com/in/jess-raphael-ong-954091205/"
            />
          </Fade>
          <Fade direction="left" delay={400}>
            <Profile
              src={"/images/zech.png"}
              name={"Zechary Au"}
              link="https://www.linkedin.com/in/zechary-au-b92a34217/"
            />
          </Fade>

          <Fade direction="left" delay={600}>
            <Profile
              src={"/images/rayner.png"}
              name={"Rayner Loh"}
              link="https://www.linkedin.com/in/raypuff/"
            />
          </Fade>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
