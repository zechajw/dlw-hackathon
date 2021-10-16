import { FC } from "react";
import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";

type Props = {
  src: string;
  name: string;
  link: string;
};

const Profile: FC<Props> = ({ src, name, link }) => {
  return (
    <a
      href={link}
      className="flex flex-col items-center py-20 cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        className="object-cover rounded-3xl"
        src={src}
        alt="profile image"
        height={300}
        width={300}
      />
      <span className="mx-auto mt-5 text-2xl text-white">{name}</span>
      <div className="flex flex-grow mt-3">
        <AiOutlineLinkedin size={60} color="#0a66c2" />
      </div>
    </a>
  );
};
export default Profile;
