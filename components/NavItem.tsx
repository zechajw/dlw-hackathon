import { FC } from "react";

type Props = {
  title: string;
  href: string;
};

const NavItem: FC<Props> = ({ title, href }) => {
  return (
    <>
      <div>
        <a
          className="text-md flex flex-col items-center text-center text-white cursor-pointer hover:text-gray-400"
          href={href}
        >
          {title}
        </a>
      </div>
    </>
  );
};
export default NavItem;
