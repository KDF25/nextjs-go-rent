"use client";

import { ROLES, useGetAuthUserQuery } from "@entities/user";
import { PATHS } from "@shared/config";
import { SidebarProvider } from "@shared/ui";
import { Navbar } from "@widgets/navbar";
import { UserSidebar } from "@widgets/userSidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === ROLES.MANAGER && pathname.startsWith("/tenants")) ||
        (userRole === ROLES.TENANT && pathname.startsWith("/managers"))
      ) {
        router.push(
          userRole === ROLES.MANAGER
            ? PATHS.MANAGERS_PROPERTIES
            : PATHS.TENANTS_FAVORITES,
          { scroll: false },
        );
      } else {
        setIsLoading(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return <>Loading...</>;
  if (!authUser?.userRole) return null;

  return (
    <SidebarProvider>
      <div className="w-full min-h-screen bg-primary-100">
        <Navbar />
        <div style={{ marginTop: `var(--height-navbar)` }}>
          <main className="flex">
            <UserSidebar userType={authUser?.userRole} />
            <div className="flex-grow transition-all duration-300">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
