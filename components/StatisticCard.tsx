import { FC } from "react";
import CountUp from "react-countup";

type Props = {
  style: "name1" | "name2";
  title: "Messages sent" | "Avg. response time" | "Avg. interest score";
  value: number;
  unit: string;
};

const StatisticCard: FC<Props> = ({ style, title, value, unit }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-ai-800 bg-opacity-30 rounded-2xl">
        <h1 className="mb-2 text-sm font-bold text-center text-white">
          {title}
        </h1>
        <p
          className={`mt-auto text-3xl font-black ${
            style === "name1" ? "text-[#EB6796]" : "text-[#F05B43]"
          } text-opacity-90`}
        >
          <CountUp start={0} end={value} delay={0} duration={0.4}>
            {({ countUpRef }) => (
              <>
                <span ref={countUpRef} />
                {unit}
              </>
            )}
          </CountUp>
        </p>
      </div>
    </>
  );
};
export default StatisticCard;
