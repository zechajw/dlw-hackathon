import { FC } from "react";

type Props = {
  className?: string;
};

const Button: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`${className} cursor-pointer rounded-md bg-white hover:bg-gradient text-ai-900 hover:text-white`}
      >
        {children}
      </div>
    </>
  );
};
export default Button;
