import { FC, useState, useEffect } from "react";
import Button from "./Button";
import { Data, DataStore, FullData } from "../interfaces";
import LoadingSpinner from "./LoadingSpinner";
import { Fade } from "react-awesome-reveal";
import Graph from "./Graph";

const Analyzer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [fullData, setFullData] = useState<FullData>();
  const [statistics, setStatistics] = useState<number[][]>([[]]);

  const resetData = (): void => {
    setFullData(undefined);
    setStatistics([[]]);
  };

  const fetchResults = async (): Promise<void> => {
    function sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    setLoading(true);
    await sleep(500);
    const dummyName1: any = prompt("Please enter the first person's name");
    const dummyName2: any = prompt("Please enter the second person's name");
    await sleep(3000);
    try {
      const days: number = Math.floor(Math.random() * 5) + 3;
      const randomNumbers: number[] = [];
      for (let i = 0; i < days * 2; i++) {
        randomNumbers.push(Number((Math.random() * 6).toFixed(2)));
      }
      const dummyData: Data[] = [];
      for (let i = days; i > 0; i--) {
        const newDataPoint: Data = { date: "", value: {} };
        const datePoint = new Date();
        datePoint.setDate(datePoint.getDate() - i);
        newDataPoint.date = datePoint.toISOString().slice(0, 10);
        newDataPoint.value = {
          [dummyName1]: randomNumbers[2 * (days - i)],
          [dummyName2]: randomNumbers[2 * (days - i) + 1],
        };
        dummyData.push(newDataPoint);
      }
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
              <Fade direction="up">
                <Button
                  className="px-10 py-4 mx-auto mt-10 text-4xl font-bold text-center uppercase w-max"
                  onClick={fetchResults}
                >
                  Upload Chat
                </Button>
              </Fade>
            </div>
          </div>
        )}
        {loading && <LoadingSpinner />}
        {!loading && fullData && (
          <Graph
            fullData={fullData}
            statistics={statistics}
            resetData={resetData}
          />
        )}
      </div>
    </>
  );
};
export default Analyzer;
