import { FC } from "react";

const Border: FC = ({ children }) => {
  return (
    <>
      <div className="max-w-7xl">{children}</div>
    </>
  );
};
export default Border;
