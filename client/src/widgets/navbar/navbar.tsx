"use client";

import { ROLES, useGetAuthUserQuery } from "@entities/user";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { PATHS } from "@shared/config";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@shared/ui";
import { signOut } from "aws-amplify/auth";
import { Bell, MessageCircle, Plus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { FC } from "react";

export const Navbar: FC = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage =
    pathname.startsWith(PATHS.MANAGERS_BASE) ||
    pathname.startsWith(PATHS.TENANTS_BASE);

  const handleSignOut = async () => {
    await signOut();
    router.push(PATHS.MAIN);
  };

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
        {isDashboardPage && authUser && (
          <Button
            variant="secondary"
            className="md:ml-4 bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-primary-50"
            onClick={() =>
              router.push(
                authUser.userRole === ROLES.MANAGER
                  ? PATHS.MANAGERS_NEW_PROPERTY
                  : PATHS.SEARCH,
              )
            }
          >
            {authUser.userRole === ROLES.MANAGER ? (
              <>
                <Plus className="w-4 h-4" />
                <span className="hidden md:block ml:2">Add New Property</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span className="hidden md:block ml:2">Search Properties</span>
              </>
            )}
          </Button>
        )}
        {!isDashboardPage && (
          <p className="hidden text-primary-200 md:block">
            Discover your perfect rental apartment with our advanced search
          </p>
        )}
        <div className="flex items-center gap-5">
          {authUser ? (
            <>
              <div className="relative hidden md:block">
                <MessageCircle className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-secondary-700"></span>
              </div>
              <div className="relative hidden md:block">
                <Bell className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-secondary-700"></span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                  <Avatar>
                    <AvatarImage src={authUser?.userInfo?.profileImage} />
                    <AvatarFallback className="bg-primary-600">
                      {authUser?.userRole?.[0].toUpperCase()}
                    </AvatarFallback>
                    <p className="hidden text-primary-200 md:block">
                      {authUser?.userInfo?.name}
                    </p>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-primary-700">
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                    onClick={() =>
                      router.push(
                        authUser?.userRole === ROLES.MANAGER
                          ? PATHS.MANAGERS_PROPERTIES
                          : PATHS.TENANTS_FAVORITES,
                        // { scroll: false }
                      )
                    }
                  >
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary-200" />
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                    onClick={() =>
                      router.push(
                        authUser?.userRole === ROLES.MANAGER
                          ? PATHS.MANAGERS_SETTINGS
                          : PATHS.TENANTS_FAVORITES,
                        // { scroll: false }
                      )
                    }
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href={PATHS.SIGNIN}>
                <Button
                  variant="outline"
                  className="text-white bg-transparent border-white rounded-lg hover:bg-white hover:text-primary-700"
                >
                  Sign In
                </Button>
              </Link>
              <Link href={PATHS.SIGNIN}>
                <Button
                  variant="secondary"
                  className="text-white border-white rounded-lg bg-secondary-600 hover:bg-white hover:text-secondary-600"
                >
                  Sign Out
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
