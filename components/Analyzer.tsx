import { FC } from "react";

const Analyzer: FC = () => {
  return (
    <div className="flex flex-col items-center h-screen mt-28" id="analyzer">
      <h1 className="text-5xl font-bold text-center text-white">
        Ready to decipher your love life?
      </h1>
      <p className="mt-4 text-xl text-white text-opacity-90">
        To start, we would need you to upload the Telegram chat history of the
        person that you would like to analyze
        <p className="mt-1 text-base text-center">
          Don't worry! We do not store this data so your privacy is not
          compromised{" "}
          <span role="img" aria-label="Smiling emoji">
            ☺️
          </span>
        </p>
      </p>
      <h2 className="mt-12 text-3xl font-bold text-white">
        How to export your Telegram chat history
      </h2>
      <ol className="w-2/3 mt-8 text-xl text-left text-white list-decimal space-y-4">
        <li>
          <h3>
            Navigate to the personal chat that you would like to analyze on{" "}
            <a
              className="text-blue-400 underline cursor-pointer"
              href="https://desktop.telegram.org/"
              target="_blank"
              rel="noreferrer"
            >
              Telegram Desktop
            </a>
          </h3>
        </li>
        <li>
          <h3>
            Navigate to the personal chat that you would like to analyze on{" "}
            <a
              className="text-blue-400 underline cursor-pointer"
              href="https://desktop.telegram.org/"
              target="_blank"
              rel="noreferrer"
            >
              Telegram Desktop
            </a>
          </h3>
        </li>
      </ol>
    </div>
  );
};
export default Analyzer;
