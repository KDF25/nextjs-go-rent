import { PATHS } from "@shared/config";
import { Building, FileText, Heart, Home, Settings } from "lucide-react";

export const managerLinks = [
  { icon: Building, label: "Properties", href: PATHS.MANAGERS_PROPERTIES },
  {
    icon: FileText,
    label: "Applications",
    href: PATHS.MANAGERS_APPLICATIONS,
  },
  { icon: Settings, label: "Settings", href: PATHS.MANAGERS_SETTINGS },
];

export const tenantLinks = [
  { icon: Heart, label: "Favorites", href: PATHS.TENANTS_FAVORITES },
  {
    icon: FileText,
    label: "Applications",
    href: PATHS.TENANTS_APPLICATIONS,
  },
  { icon: Home, label: "Residences", href: "/tenants/residences" },
  { icon: Settings, label: "Settings", href: PATHS.TENANTS_SETTINGS },
];
