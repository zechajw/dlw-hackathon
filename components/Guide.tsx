import { FC } from "react";
import Image from "next/image";
import Button from "./Button";

const Guide: FC = () => {
  return (
    <div className="flex flex-col items-center pt-32" id="guide">
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
      <div className="justify-between mt-5 text-xl text-white grid grid-cols-4 gap-x-12">
        <div>
          <h3 className="mb-4 text-justify">
            1. Navigate to the personal chat that you would like to analyze on{" "}
            <a
              className="text-blue-400 underline cursor-pointer"
              href="https://desktop.telegram.org/"
              target="_blank"
              rel="noreferrer"
            >
              Telegram Desktop
            </a>
          </h3>
          <div className="hover:scale-125 transform transition-all">
            <Image
              src="/images/export-chat-history-0.png"
              alt="Telegram export chat history 0"
              height={42}
              width={290}
              className="rounded-2xl"
              layout="fixed"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-justify">
            2. Click the triple dot button on the top right and then click
            'Export chat history'
          </h3>
          <div className="hover:scale-125 transform transition-all">
            <Image
              src="/images/export-chat-history-1.png"
              alt="Telegram export chat history"
              height={300}
              width={150}
              className="rounded-2xl"
              layout="fixed"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-justify">
            3. Uncheck all boxes, select format as 'JSON', and select a time
            period ranging from 3 days to 7 days
          </h3>
          <div className="hover:scale-125 transform transition-all">
            <Image
              src="/images/export-chat-history-2.png"
              alt="Telegram export chat history 2"
              height={300}
              width={240}
              className="rounded-2xl"
              layout="fixed"
            />
          </div>
        </div>
        <div className="flex flex-col items-center h-full">
          <h3 className="mb-4 text-justify">4. Click the 'Export' button</h3>
          <div className="hover:scale-125 transform transition-all">
            <Image
              src="/images/export-chat-history-3.png"
              alt="Telegram export chat history 3"
              height={60}
              width={120}
              className="rounded-2xl"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
