import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FeaturesCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export const FeaturesCard: FC<FeaturesCardProps> = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center h-48 p-4 mb-4 rounded-lg">
        <Image
          src={imageSrc}
          width={400}
          height={400}
          className="object-contain w-full h-full"
          alt={title}
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link
        href={linkHref}
        className="inline-block px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        scroll={false}
      >
        {linkText}
      </Link>
    </div>
  );
};
