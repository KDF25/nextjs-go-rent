import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/ui";
import { managerLinks, ROLES, tenantLinks } from "@entities/user";
import { cn } from "@shared/lib";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface UserSidebarProps {
  userType: ROLES;
}

export const UserSidebar: FC<UserSidebarProps> = ({ userType }) => {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const navLinks = userType === ROLES.MANAGER ? managerLinks : tenantLinks;

  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg"
      style={{
        top: `var(--height-navbar)`,
        height: `calc(100vh - var(--height-navbar))`,
      }}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex min-h-[56px] w-full items-center pt-3 mb-3",
                open ? "justify-between px-6" : "justify-center",
              )}
            >
              {open ? (
                <>
                  <h1 className="text-xl font-bold text-gray-800">
                    {userType === "manager" ? "Manager View" : "Renter View"}
                  </h1>
                  <button
                    className="p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleSidebar()}
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </>
              ) : (
                <button
                  className="p-2 rounded-md hover:bg-gray-100"
                  onClick={() => toggleSidebar()}
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
              )}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-7 py-7",
                    isActive
                      ? "bg-gray-100"
                      : "text-gray-600 hover:bg-gray-100",
                    open ? "text-blue-600" : "ml-[5px]",
                  )}
                >
                  <Link href={link.href} className="w-full" scroll={false}>
                    <div className="flex items-center gap-3">
                      <link.icon
                        className={`h-5 w-5 ${
                          isActive ? "text-blue-600" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          isActive ? "text-blue-600" : "text-gray-600"
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
