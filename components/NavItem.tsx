import { FC } from "react";

type Props = {
  title: string;
  link: string;
};

const NavItem: FC<Props> = ({ title, link }) => {
  return (
    <>
      <div>
        <a
          className="text-md flex flex-col items-center text-center text-white cursor-pointer hover:text-gray-400"
          href={link}
        >
          {title}
        </a>
      </div>
    </>
  );
};
export default NavItem;
