import { paths } from "@shared/config";
import { Button } from "@shared/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full shadow-xl h-[var(--height-navbar)]">
      <div className="flex items-center justify-between w-full h-full px-8 py-3 text-white bg-primary-700">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="GoRent logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                GO
                <span className="font-light text-secondary-500 hover:!text-primary-300">
                  RENT
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="hidden text-primary-200 md:block">
          Discover your perfect rental apartment with our advanced search
        </p>
        <div className="flex items-center gap-5">
          <Link href={paths.signin}>
            <Button
              variant="outline"
              className="text-white bg-transparent border-white rounded-lg hover:bg-white hover:text-primary-700"
            >
              Sign In
            </Button>
          </Link>
          <Link href={paths.signin}>
            <Button
              variant="secondary"
              className="text-white border-white rounded-lg bg-secondary-600 hover:bg-white hover:text-secondary-600"
            >
              Sign Out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
