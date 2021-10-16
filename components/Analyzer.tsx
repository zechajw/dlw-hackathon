import { FC, useState, useEffect } from "react";
import Button from "./Button";
import { Data, DataStore, FullData } from "../interfaces";
import LoadingSpinner from "./LoadingSpinner";
import Graph from "./Graph";

const Analyzer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [fullData, setFullData] = useState<FullData>();
  const [statistics, setStatistics] = useState<number[][]>([[]]);

  const fetchResults = async (): Promise<void> => {
    function sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    setLoading(true);
    await sleep(3500);
    try {
      const randomNumbers: number[] = [];
      for (let i = 0; i < 12; i++) {
        randomNumbers.push(Number((Math.random() * 4 + 1).toFixed(2)));
      }
      const dummyData: Data[] = [
        {
          date: "2021-10-11",
          value: { Jess: randomNumbers[0], Amos: randomNumbers[1] },
        },

        {
          date: "2021-10-12",
          value: { Jess: randomNumbers[2], Amos: randomNumbers[3] },
        },

        {
          date: "2021-10-13",
          value: { Jess: randomNumbers[4], Amos: randomNumbers[5] },
        },

        {
          date: "2021-10-14",
          value: { Jess: randomNumbers[6], Amos: randomNumbers[7] },
        },

        {
          date: "2021-10-15",
          value: { Jess: randomNumbers[8], Amos: randomNumbers[9] },
        },
        {
          date: "2021-10-16",
          value: { Jess: randomNumbers[10], Amos: randomNumbers[11] },
        },
      ];
      const names = Object.keys(dummyData[0].value);
      const name1 = names[0];
      const name2 = names[1];
      const store: DataStore[] = [];
      dummyData.forEach((data) => {
        store.push({
          date: new Date(data.date).toDateString().slice(4, -4),
          [name1]: data.value[name1],
          [name2]: data.value[name2],
        });
      });
      setFullData({ name1: name1, name2: name2, store: store });
      const name1Sent = Math.floor(Math.random() * 800);
      const name2Sent = Math.floor(Math.random() * 800);

      const name1ResponseTime = Math.floor(Math.random() * 60);
      const name2ResponseTime = Math.floor(Math.random() * 60);

      const name1Average = Number(
        (
          randomNumbers
            .filter((num, idx) => idx % 2 === 0)
            .reduce((a, b) => a + b) /
          (randomNumbers.length / 2)
        ).toFixed(1)
      );
      const name2Average = Number(
        (
          randomNumbers
            .filter((num, idx) => idx % 2 !== 0)
            .reduce((a, b) => a + b) /
          (randomNumbers.length / 2)
        ).toFixed(1)
      );
      setStatistics([
        [name1Sent, name1ResponseTime, name1Average],
        [name2Sent, name2ResponseTime, name2Average],
      ]);
    } catch (err: unknown) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      <div id="analyzer" className="pt-32">
        {!loading && !fullData && (
          <div className=" h-almost grid place-items-center">
            <div className="">
              <h1 className="text-5xl font-bold text-center text-white">
                You&apos;re all set to demystify attraction!
              </h1>
              <Button
                className="px-10 py-4 mx-auto mt-10 text-4xl font-bold text-center uppercase w-max"
                onClick={fetchResults}
              >
                Upload Chat
              </Button>
            </div>
          </div>
        )}
        {loading && <LoadingSpinner />}
        {!loading && fullData && (
          <Graph fullData={fullData} statistics={statistics} />
        )}
      </div>
    </>
  );
};
export default Analyzer;
