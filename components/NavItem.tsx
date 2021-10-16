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
          className="flex flex-col items-center text-center cursor-pointer sm:w-20 hover:text-white"
          href={link}
        >
          {title}
        </a>
      </div>
    </>
  );
};
export default NavItem;
