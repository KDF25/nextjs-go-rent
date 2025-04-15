"use client";

import { ROLES, useGetAuthUserQuery } from "@entities/user";
import { PATHS } from "@shared/config";
import "@shared/styles/globals.css";
import { Loading } from "@shared/ui";
import { Navbar } from "@widgets/navbar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === ROLES.MANAGER && pathname.startsWith(PATHS.SEARCH)) ||
        (userRole === ROLES.MANAGER && pathname === PATHS.MAIN)
      ) {
        router.push("/managers/properties", { scroll: false });
      } else {
        setIsLoading(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return <Loading />;
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="flex flex-col w-full h-full pt-[var(--height-navbar)]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
