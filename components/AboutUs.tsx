import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <>
      <div className="h-screen pt-32 mt-28" id="about-us">
        <h1 className="heading">About us</h1>
        <p className="mt-16 paragraph">
          Here at ÀI, we understand the struggles that many singles face. Some
          call it the dating game, others the talking phase, or even a
          situationship. Whatever the phrase used, the experience is an arduous
          and confusing one for many singles looking to find a partner. After
          some research and soul searching, we realized that the underlying
          problem is that:
        </p>
        <p className="mt-8 font-bold text-center paragraph">
          It is difficult to figure out if your interest is reciprocated.
        </p>
        <p className="mt-12 paragraph">
          From deciphering if they are flirty or just friendly to calculating
          their response times, it is often a guessing game in trying to figure
          out if they like you back. This asymmetric information may sometimes
          lead to making the wrong decision such as confessing too early or not
          at all.
        </p>
        <p className="mt-12 paragraph">
          Fret no more! Here at ÀI, we believe that we have found the solution
          to all your love life problems. Using state of the art technology of
          sentiment analysis with machine learning, our solution can:{" "}
        </p>
        <p className="mt-8 font-bold text-center paragraph">
          Convert your chat history into visualizable data that tells you how
          much they actually like you.
        </p>
      </div>
    </>
  );
};
export default AboutUs;
