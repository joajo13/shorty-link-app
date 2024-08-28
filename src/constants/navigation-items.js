import { ROLES } from "./roles";
import { routes } from "./routes";

export const navigationItems = [
  {
    label: "Dashboard",
    href: routes.dashboard,
    auth: ROLES.ADMIN,
  },
  {
    label: "Overview",
    href: routes.home,
    auth: ROLES.USER,
  },
  {
    label: "Account",
    href: routes.account,
    auth: ROLES.USER,
  },
];
