import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const AboutUs: FC = () => {
  return (
    <>
      <div className="pt-32" id="about-us">
        <h1 className="heading">About us</h1>
        <p className="mt-16 paragraph">
          Here at ÀI, we understand the struggles that many singles face. Some
          call it the dating game, others the talking phase, or even a
          situationship. Whatever the phrase used, the experience is an arduous
          and confusing one for many singles looking to find a partner. After
          some research and soul searching, we realized that the underlying
          problem is that:
        </p>
        {/* <div className="grid grid-cols-2 gap-16"> */}
        <Fade direction="up">
          <div className="flex flex-col items-center">
            <p className="mt-12 mb-8 font-bold text-center paragraph">
              It is difficult to figure out if your interest is reciprocated.
            </p>
            <Image
              src="/images/texting.jpeg"
              alt="Texting"
              height={300}
              width={450}
              className="rounded-2xl"
              layout="fixed"
            />
          </div>
        </Fade>

        <p className="mt-12 paragraph">
          From deciphering if they are flirty or just friendly to calculating
          their response times, it is often a guessing game in trying to figure
          out if they like you back. This asymmetric information may sometimes
          lead to making the wrong decision such as confessing too early or not
          at all.
        </p>
        {/* </div> */}

        <p className="mt-12 paragraph">
          Fret no more! Here at ÀI, we believe that we have found the solution
          to all your love life problems. Using state of the art technology of
          sentiment analysis with machine learning, our solution can:{" "}
        </p>
        <Fade direction="up">
          <div className="flex flex-col items-center">
            <p className="my-8 font-bold text-center paragraph">
              Convert your chat history into visualizable data that tells you
              how much they actually like you.
            </p>
            <Image
              src="/images/chart.png"
              alt="Texting"
              height={250}
              width={617}
              className="rounded-2xl"
              layout="fixed"
            />
          </div>
        </Fade>
      </div>
    </>
  );
};
export default AboutUs;
