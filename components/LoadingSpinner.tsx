import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="text-4xl font-bold text-center text-white">
          Analyzing your chat...
        </h1>
        <p className="mt-8 text-2xl text-center text-white">
          Please be patient as this may take up to a few minutes{" "}
        </p>
      </div>
    </>
  );
};
export default LoadingSpinner;
