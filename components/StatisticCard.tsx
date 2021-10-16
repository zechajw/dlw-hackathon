import { FC } from "react";

type Props = {
  style: "name1" | "name2";
  title: string;
  statistic: string;
};

const StatisticCard: FC<Props> = ({ style, title, statistic }) => {
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
          {statistic}
        </p>
      </div>
    </>
  );
};
export default StatisticCard;
