import { ROLES } from "./roles";
import { baseRoutes } from "./routes";

export const navigationItems = [
  {
    label: "Dashboard",
    href: baseRoutes.dashboard,
    auth: ROLES.ADMIN,
  },
  {
    label: "Overview",
    href: baseRoutes.home,
    auth: ROLES.USER,
  },
  {
    label: "Account",
    href: baseRoutes.account,
    auth: ROLES.USER,
  },
];
