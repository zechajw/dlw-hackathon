import { FC } from "react";

type Props = {
  name: string;
  nameNumber: 1 | 2;
  score: number;
};

const NameResults: FC<Props> = ({ name, nameNumber, score }) => {
  return (
    <>
      <div className="text-3xl font-bold text-white">
        <span
          className={`${
            nameNumber === 1 ? "text-[#EB6796]" : "text-[#F05B43]"
          }`}
        >
          {name}
        </span>{" "}
        seems to be{" "}
        <span
          className={
            score < 1
              ? "text-red-500"
              : score < 2
              ? " text-yellow-600"
              : score < 3
              ? " text-yellow-300"
              : score < 4
              ? " text-green-300"
              : " text-green-600"
          }
        >
          {score < 1
            ? "very uninterested"
            : score < 2
            ? "mildly uninterested"
            : score < 3
            ? "neither interested nor uninterested"
            : score < 4
            ? "mildly interested"
            : "very interested"}
        </span>
      </div>
    </>
  );
};
export default NameResults;
