import { FC, useState, useRef, useEffect } from "react";
import { LineChart, Line, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { FullData } from "../interfaces";
import StatisticCard from "./StatisticCard";
import NameResults from "./NameResults";

type Props = {
  fullData: FullData;
};

const Graph: FC<Props> = ({ fullData }) => {
  const { name1, name2 } = fullData;

  return (
    <>
      <div className="h-almost">
        <h1 className="text-5xl font-bold text-white mb-14">Your results</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <LineChart
              width={800}
              height={250}
              data={fullData.store}
              margin={{ top: 0, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey={name1} stroke="#EB6796" />
              <Line type="monotone" dataKey={name2} stroke="#F05B43" />
              <XAxis dataKey="date" stroke="white" />
              <YAxis stroke="white" domain={[0, 5]} />
              <Tooltip />
              <Legend />
            </LineChart>{" "}
          </div>
          <div className="w-full -mt-20 col-span-4 grid grid-rows-2">
            <div className="w-full">
              <h1 className="text-2xl font-bold text-white">
                {name1}'s statistics
              </h1>
              <div className="w-full mt-4 grid grid-cols-3 gap-4">
                <StatisticCard
                  style="name1"
                  title="Messages sent"
                  value={847}
                  unit=""
                />
                <StatisticCard
                  style="name1"
                  title="Avg. response time"
                  value={1283}
                  unit="s"
                />
                <StatisticCard
                  style="name1"
                  title="Avg. interest score"
                  value={3.3}
                  unit="/5"
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <h1 className="text-2xl font-bold text-white">
                {name2}'s statistics
              </h1>
              <div className="w-full mt-4 grid grid-cols-3 gap-4">
                <StatisticCard
                  style="name2"
                  title="Messages sent"
                  value={437}
                  unit=""
                />
                <StatisticCard
                  style="name2"
                  title="Avg. response time"
                  value={2803}
                  unit="s"
                />
                <StatisticCard
                  style="name2"
                  title="Avg. interest score"
                  value={2.4}
                  unit="/5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 mt-4 ml-8 bg-ai-800 bg-opacity-30 w-max rounded-xl">
          <NameResults name={name1} nameNumber={1} score={3.4} />
          <div className="mt-6 text-3xl font-bold text-white">
            <NameResults name={name2} nameNumber={2} score={1.4} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Graph;
