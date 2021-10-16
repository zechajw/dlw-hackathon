import { FC } from "react";

type Props = {
  className?: string;
  href?: string;
};

const Button: FC<Props> = ({ children, className, href }) => {
  const withoutAnchor: JSX.Element = (
    <div
      className={`${className} select-none cursor-pointer rounded-md bg-white hover:bg-gradient text-ai-900 hover:text-white`}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={`#${href}`}>{withoutAnchor}</a>;
  }

  return withoutAnchor;
};
export default Button;
