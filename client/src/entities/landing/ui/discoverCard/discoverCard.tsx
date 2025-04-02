import Image from "next/image";
import { FC } from "react";

interface DiscoverCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const DiscoverCard: FC<DiscoverCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="px-4 py-12 rounded-lg shadow-lg bg-primary-50 md:h-72">
      <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
        <Image
          src={imageSrc}
          width={30}
          height={30}
          className="w-full h-full"
          alt={title}
        />
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};
