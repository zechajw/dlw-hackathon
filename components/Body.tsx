import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="w-screen min-h-screen bg-svg">{children}</div>
    </>
  );
};
export default Body;
